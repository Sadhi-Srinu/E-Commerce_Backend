import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import wishlistRouter from './routes/wishlistRoute.js';
import orderRouter from './routes/orderRoutes.js';


//App Config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart/', cartRouter)
app.use('/api/wishlist', wishlistRouter)
app.use('/api/order', orderRouter)


app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
})