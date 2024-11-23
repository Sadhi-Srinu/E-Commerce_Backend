import express from 'express'
import  {addToWishlist, getUserWishlist, updateWishlist} from '../controllers/wishlistController.js'


const wishlistRouter = express.Router()

wishlistRouter.post('/add', addToWishlist)
wishlistRouter.post('/get', getUserWishlist)
wishlistRouter.post('/update', updateWishlist)


export default wishlistRouter