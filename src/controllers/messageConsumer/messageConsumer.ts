import { getChannel } from '@/lib/rabbitmq';
import { ConsumeMessage } from 'amqplib';

const REQUESTS_PER_SECOND = process.env.REQUESTS_PER_SECOND
	? parseInt(process.env.REQUESTS_PER_SECOND, 10)
	: 1;
const QUEUE_NAME = process.env.QUEUE_NAME || 'queue_message';
const MAX_RETRIES = process.env.MAX_RETRIES ? parseInt(process.env.MAX_RETRIES, 10) : 3;
let retries = 0;

// Tipos para el mensaje
interface ProcessedMessage {
	success: boolean;
	data?: unknown;
	error?: string;
}

async function receiveRequest(messageBody: unknown): Promise<ProcessedMessage> {
	
	console.log('Processing messagesssss:', messageBody);

	await new Promise(resolve => setTimeout(resolve, 100));

	return { success: true, data: messageBody };
}

export const messageConsumer = async () => {
	try {
		const messageQueue: ConsumeMessage[] = [];
		const channel = getChannel();

		if (!channel)
			throw new Error(
				JSON.stringify({
					ok: false,
					message: 'RabbitMQ Channel not initialized.',
					status: 500,
				}),
			);

		await channel.assertQueue(QUEUE_NAME, { durable: true });
		await channel.prefetch(5);

		const processMessages = async () => {
			if (messageQueue.length === 0) return;

			const msg = messageQueue.shift();
			if (!msg) return;

			const data = msg.content.toString();
			const body = JSON.parse(data);

			try {
				console.log(body.body.query);
				const response = await receiveRequest(body.body);
				console.log(response);

				channel.ack(msg);
				retries = 0; // Reset retries on success
			} catch (error) {
				console.error('Error processing message:', error);
				if (retries + 1 >= MAX_RETRIES) {
					channel.nack(msg, false, false); // No reencolar, descartar mensaje
					retries = 0; // Reset retries
				} else {
					channel.nack(msg, false, true); // Reencolar mensaje
					retries++;
				}
			}
		};
		setInterval(processMessages, 1000 / REQUESTS_PER_SECOND);
		channel.consume(QUEUE_NAME, (msg: ConsumeMessage | null) => {
			if (msg) {
				messageQueue.push(msg);
			}
		});
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(
			JSON.stringify({
				ok: false,
				message: errorMessage,
				status: 500,
			}),
		);
	}
};
