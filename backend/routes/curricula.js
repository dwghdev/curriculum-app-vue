const controller = require("../controllers/curriculaController")
const express = require("express")
const router = express.Router()

router.route("/")
  .post(controller.createCurriculum)
  .get(controller.getCurricula)

router.route("/:id")
  .get(controller.getCurriculum)
  .patch(controller.updateCurriculum)
  .delete(controller.deleteCurriculum)

module.exports = router
