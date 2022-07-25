import { Lecture } from "../models/lecture.js"
import { Profile } from "../models/profile.js"

function create(req, res) {
  req.body.author = req.user.profile
  Lecture.create(req.body)
  .then(lecture => 
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.lectures.push(lecture._id)
      profile.save()
      .then(() => res.json(lecture))
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
  .then(lectures => res.json(lectures))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  create,
  index
}