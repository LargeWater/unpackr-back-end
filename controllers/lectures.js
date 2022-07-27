import { Lecture } from "../models/lecture.js"
import { Profile } from "../models/profile.js"

function create(req, res) {
  req.body.author = req.user.profile
  Lecture.create(req.body)
  .then(lecture => 
    Profile.findById(lecture._id)
    .populate('author')
    .then(populatedLecture => {
      res.json(populatedLecture)
    })
  )
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function index(req, res) {
  Lecture.find({})
  .populate('author')
  .then(lectures =>  {
    res.json(lectures)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function update(req, res) {
  Lecture.findById(req.params.id)
  .then(lecture => {
    Lecture.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedLecture => res.json(updatedLecture))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteLecture(req, res) {
  Lecture.findById(req.params.id)
  .then(lecture => {
    Lecture.findByIdAndDelete(lecture._id)
    .then(deletedLecture => {
      res.json(deletedLecture)
    })
  }) .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  create,
  index,
  update,
  deleteLecture as delete
}