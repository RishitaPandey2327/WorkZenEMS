const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { getAllUsers, deleteUser } = require("../controllers/userController");

router.get("/", auth, role("HR"), getAllUsers);
router.delete("/:id", auth, role("HR"), deleteUser);

module.exports = router;