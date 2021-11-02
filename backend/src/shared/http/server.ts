import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routers from '@shared/routers';
import '@shared/typeorm'
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(routers);

app.use((error: Error, request: Request, response: Response, next: NextFunction ) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
})


app.listen(PORT, () => { console.log(`API running on port ${PORT}`); });