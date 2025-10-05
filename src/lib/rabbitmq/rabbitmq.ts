import amqp from 'amqplib';
import { messageConsumer } from '@/controllers/messageConsumer';

const RABBITMQ_URL: string = process.env.RABBITMQ_URL || '';
const RETRY_INTERVAL = 5000;

let channel: amqp.Channel | null = null;
let isInitialized = false;
let isInitializing = false;

const connect = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const ch = await connection.createChannel();

        connection.on('close', () => {
            console.error('RabbitMQ connection closed. Reconnecting...');
            channel = null;
            setTimeout(connect, RETRY_INTERVAL);
        });

        connection.on('error', (err) => {
            console.error('RabbitMQ connection error:', err.message);
        });

        channel = ch;
        console.log('RabbitMQ connected and channel created.');
    } catch (error) {
        console.error('Failed to connect to RabbitMQ. Retrying in 5 seconds...', error);
        setTimeout(connect, RETRY_INTERVAL);
    }
};

export const connectRabbitMQ = async () => {
    await connect();
};

export const getChannel = () => {
    if (!channel) {
        console.warn('RabbitMQ channel not initialized yet.');
    }
    return channel;
};

export async function initializeRabbitMQ() {
    // Prevent multiple initializations
    if (isInitialized || isInitializing) {
        console.log('RabbitMQ already initialized or initializing...');
        return;
    }

    isInitializing = true;

    try {
        console.log('Initializing RabbitMQ connection...');

        // Connect to RabbitMQ
        await connectRabbitMQ();

        // Wait a bit for the connection to be fully established
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Start the message consumer
        console.log('Starting message consumer...');
        await messageConsumer();

        isInitialized = true;
        isInitializing = false;

        console.log('RabbitMQ initialized successfully');
    } catch (error) {
        isInitializing = false;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Failed to initialize RabbitMQ:', errorMessage);

        // Retry after 5 seconds
        console.log('Retrying RabbitMQ initialization in 5 seconds...');
        setTimeout(initializeRabbitMQ, 5000);
    }
}

export function isRabbitMQInitialized() {
    return isInitialized;
}

let globalInitialized = false;

async function globalRabbitMQInit() {
    // Solo ejecutar en el servidor
    if (typeof window !== 'undefined') {
        return;
    }

    // Evitar múltiples inicializaciones
    if (globalInitialized) {
        return;
    }

    globalInitialized = true;

    try {
        console.log('Starting global RabbitMQ initialization...');
        await initializeRabbitMQ();
        console.log('RabbitMQ is ready and listening for messages');
    } catch (error) {
        console.error('Failed to initialize RabbitMQ globally:', error);
        globalInitialized = false;

        // Reintentar después de 10 segundos
        setTimeout(() => {
            globalInitialized = false;
            globalRabbitMQInit();
        }, 10000);
    }
}

// Auto-inicializar cuando se importa este módulo en el servidor
if (typeof window === 'undefined') {
    globalRabbitMQInit();
}
