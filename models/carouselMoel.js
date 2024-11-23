import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
    image:{
        type: Array,
        required: true,
    }
})    

const carouselModel = mongoose.models.carousel || mongoose.model("carousel", carouselSchema);

export default carouselModel