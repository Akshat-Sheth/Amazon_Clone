const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const cookiePaser = require('cookie-parser')
const bodyParser = require('body-parser')


dotenv.config()

//connecting to the database
mongoose.connect('mongodb+srv://Akshat:messi.kdb@cluster0.oezu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log("mongodb connected ")
})

//immport routes
const product = require('./Routes/productRoutes')
const user = require('./Routes/userRoutes')

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookiePaser())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/amazon',user)
app.use('/amazon',product)


app.get('/', (req,res) => {
    res.send('hi')
})

//listening on some specific port
app.listen(process.env.PORT || 1236, ()=> {
    console.log('listinig on the port')
})


