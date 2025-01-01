const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI)
mongoose.connect(MONGO_URI)
    .then(() => console.log("connected"))
    .catch((e) => console.log("Error", e))