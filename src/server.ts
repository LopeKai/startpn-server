import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes';
import { AppError } from './errors/AppError';

const cors = require('cors')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorizatio");
    app.use(cors());
    next();
})

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log('server is running is port 3333 🚀'))