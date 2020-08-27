import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import myposts from './model/posts.json';
let posts=myposts;

import postRoutes from './routes/posts.js'
import messageRoutes from './routes/messages.js'
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'

import jwt from 'jsonwebtoken';

const app=express();

const PORT=process.env.PORT || 3002;

app.use(bodyParser.json());

// connect to the database


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});

app.get('/', (req, res)=>{
    res.send('welcome to express');
});

app.use('/auth',authRoutes )
app.use('/posts', postRoutes);
app.use('/messages', messageRoutes);
app.use('/users', userRoutes);



export default app;