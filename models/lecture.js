import mongoose from "mongoose"

const lectureSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  takeaway: { type: String, required: true },
  painpoint: { type: String, required: true },
})

const Lecture = mongoose.model("Lecture", lectureSchema)

export { Lecture }
