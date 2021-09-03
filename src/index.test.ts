import server from "./server";
import supertest from "supertest";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest(server)

describe('Testing endpoints', () => {
    beforeAll(done => {
        mongoose.connect(`${process.env.MONGO_CONNECTION}/test`, () => {
            console.log("connected to Atlas");
            done()            
        })
    })

    

    afterAll(done => {
        mongoose.connection.dropDatabase().then(() => {
            mongoose.connection.close()
            done()
        })
    })
})