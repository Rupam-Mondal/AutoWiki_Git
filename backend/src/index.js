import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/api/inngest", serve({ client: inngest, functions }));



app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})