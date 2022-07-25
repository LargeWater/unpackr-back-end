import { Lecture } from "../models/lecture.js"

function create(req, res) {
  req.body.author = req.user.profile
  Lecture.create(req.body)
  .then(lecture => res.json(lecture))
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