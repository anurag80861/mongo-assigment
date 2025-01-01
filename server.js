const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const PORT =process.env.PORT
const bookRouter=require('./routes/books')

const app=express();
app.use(express.json());

require("./mongoose_conn")


app.use('/books',bookRouter)

app.listen(PORT)