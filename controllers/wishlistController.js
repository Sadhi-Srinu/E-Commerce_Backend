import userModel from "../models/userModel.js";




// Add products to wishlist
const addToWishlist = async (req, res) => {
    try {
        const {userId, itemId, size } = req.body
        const userData = await userModel.findById(userId)
        let Wishlist = await userData.Wishlist;

        if (Wishlist[itemId]) {
            if (Wishlist[itemId][size]) {
                Wishlist[itemId][size] += 1
            } else {
                Wishlist[itemId][size] = 1
            }
        } else {
            Wishlist[itemId] = {}
            Wishlist[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {Wishlist})

        res.json({ success: true, message:'Added To Wishlist' })

    } catch (error) {
        console.log(error);
        res.json({ success:false, message:error.message })
    }
} 

// get user wishlist data
const getUserWishlist = async (req, res) => {
    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        let Wishlist = await userData.Wishlist;

        res.json({success:true, Wishlist})

    } catch (error) {
        console.log(error);
        res.json({ success:false, message:error.message })
    }
} 

// Update user Wishlist
const updateWishlist = async (req, res) => {
    try{
        const {userId, itemId, size, quantity} = req.body
        const userData = await userModel.findById(userId)
        let Wishlist = await userData.Wishlist;

        Wishlist[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {Wishlist})
        res.json({ success: true, message:'Wishlist updated' })

    } catch (error) {
        console.log(error);
        res.json({ success:false, message:error.message })
    }
} 


export {addToWishlist, getUserWishlist, updateWishlist}