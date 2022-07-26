import mongoose from "mongoose"

const lectureSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  takeaway: { type: String, required: true },
  painpoint: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  thoughts: String,
})

const Lecture = mongoose.model("Lecture", lectureSchema)

export { Lecture }
