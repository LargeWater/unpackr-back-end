import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  photo: { type: String },
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
