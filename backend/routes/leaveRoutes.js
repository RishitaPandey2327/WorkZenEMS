const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  applyLeave,
  getLeaves,
  updateLeaveStatus
} = require("../controllers/leaveController");

router.post("/", auth, role("EMP"), applyLeave);
router.get("/", auth, getLeaves);
router.put("/:id", auth, role("HR"), updateLeaveStatus);

module.exports = router;