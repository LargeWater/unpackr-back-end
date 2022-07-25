import { Lecture } from "../models/lecture.js"

function create(req, res) {
  req
  Lecture.create(req.body)
  .then(lecture => res.json(lecture))
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export { 
  create
}