const Controller = require("../controllers/controller")
const router = require("express").Router()

router.get("/search", Controller.getSearch)
router.get("/", Controller.getExplore)
router.get("/:PostId/flag", Controller.getFlag)
router.get("/:PostId/unflag", Controller.getUnflag)
router.get("/:PostId/like", Controller.getLike)
router.get("/:PostId/unlike", Controller.getUnlike)
router.post("/:ProfileId/add", Controller.postExplore)

module.exports = router