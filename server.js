const express = require('express')
const PORT =process.env.PORT

const app=express();
app.use(express.json());

require("./mongoose_conn")

const bookRouter=require('./routes/books')

app.use('/books',bookRouter)

app.listen(PORT)