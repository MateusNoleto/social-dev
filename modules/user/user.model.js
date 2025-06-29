import mongoose from "mongoose";

const UseSchema = new mongoose.Schema ({
    firstName: {type: String, required: true, maxlength: 50},
    lastName: {type: String, required: true, maxlength: 50},
    user: {type: String, required: true, maxlength: 30, unique: true},
    email: {type: String, required: true, maxlength: 100, unique: true},
    password: {type: String, required: true}

})

export default mongoose.models.user || mongoose.model('User', UseSchema)