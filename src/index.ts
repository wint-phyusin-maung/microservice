import {Request, Response} from 'express'
const express = require('express')
const amqp = require('amqplib');
const app = express();
const port = 3000;

app.get('/', async (req: Request,res: Response) => {
    try{
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'hello';

        await channel.assertQueue(queue,{durable: false});
        channel.sendToQueue(queue,Buffer.from('helo,RabbitMQ!'));

        console.log(" [x] Sent 'Hello, RabbitMQ!'");

        res.send('Message sent to RabbitMQ!');

    }catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error!');
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

