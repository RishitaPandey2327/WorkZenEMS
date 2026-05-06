const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/leave", require("./routes/leaveRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/notice", require("./routes/noticeRoutes"));

app.listen(5000, ()=>console.log("Server running"));
