import { MessageBody } from './types';
import { getChannel } from '@/lib/rabbitmq';

const QUEUE_NAME = process.env.QUEUE_NAME || '';

export const messageLoader = async (body: MessageBody) => {
	try {
		if (!QUEUE_NAME) {
			throw new Error(
				JSON.stringify({
					ok: false,
					message: 'QUEUE_NAME is not defined.',
					status: 500,
				}),
			);
		}

		const storedMessage = await sendToQueue(body);
		if (!storedMessage.ok) {
			throw new Error(JSON.stringify(storedMessage));
		}

		return storedMessage;
	} catch (error: unknown) {
		let err;
		try {
			const errorMessage = error instanceof Error ? error.message : 'Unknown error';
			err = JSON.parse(errorMessage);
		} catch {
			err = { ok: false, status: 500, message: 'Internal server error' };
		}

		return err;
	}
};

async function sendToQueue(body: MessageBody) {
	try {
		const channel = await getChannel();
		if (!channel) {
			return { ok: false, message: 'RabbitMQ Channel not initialized.', status: 500, data: null };
		}
		await channel.assertQueue(QUEUE_NAME, { durable: true });
		const message = JSON.stringify({ body: body });		
		setTimeout(() => {
			channel.sendToQueue(QUEUE_NAME, Buffer.from(message));
		}, 100);
		return { ok: true, message: 'Message enqueued successfully', status: 200, data: body };
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return { ok: false, message: errorMessage, status: 500, data: null };
	}
}
