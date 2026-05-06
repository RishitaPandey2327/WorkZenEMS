const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createNotice,
  getNotices
} = require("../controllers/noticeController");

router.post("/", auth, role("HR"), createNotice);
router.get("/", auth, getNotices);

module.exports = router;