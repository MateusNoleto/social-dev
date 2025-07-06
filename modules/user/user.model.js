import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  user: String,
  email: String,
  password: String,
}, {
  timestamps: true
})

// EVITA OverwriteModelError:
export default mongoose.models.User || mongoose.model('User', userSchema)
