const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  markAttendance,
  getAttendance
} = require("../controllers/attendanceController");

router.post("/", auth, role("EMP"), markAttendance);
router.get("/", auth, getAttendance);

module.exports = router;