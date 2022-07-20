import 'reflect-metadata'
import dotenv from 'dotenv'
import path from 'path'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { errors } from 'celebrate'
import cors from 'cors'
import AppError from '../errors/AppError'
import "../../shared/typeorm"

import routes from '../routes'

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.use(errors())

server.use((error: Error, request: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log(error)
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })


})

server.listen(process.env.PORT)