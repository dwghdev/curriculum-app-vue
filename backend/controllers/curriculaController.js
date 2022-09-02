const Curriculum = require("../models/Curriculum")

const getCurricula = async(req, res) => {
  const curricula = await Curriculum.find()
  res.send(curricula)
}

const createCurriculum = async(req, res) => {
  const curriculum = new Curriculum(req.body)
  await curriculum.save()
  res.send(201, curriculum)
}

const getCurriculum = async(req, res) => {
  const curriculum = await Curriculum.findById(req.params.id)
  res.send(curriculum)
}

const updateCurriculum = async(req, res) => {
  const curriculum = await Curriculum.updateOne({ _id: req.params.id }, { ...req.body })
  res.send(curriculum)
}

const deleteCurriculum = async(req, res) => {
  await Curriculum.deleteOne({ _id: req.params.id })
  res.send("Got a DELETE request")
}

module.exports = {
  getCurricula,
  createCurriculum,
  getCurriculum,
  updateCurriculum,
  deleteCurriculum,
}
