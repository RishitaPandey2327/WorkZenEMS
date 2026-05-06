const Attendance = require("../models/Attendance");

exports.markAttendance = async (req,res)=>{
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);

    const already = await Attendance.findOne({
      userId: req.user.id,
      date: { $gte: startOfDay }
    });

    if(already) return res.json({message:"Already marked today"});

    const record = await Attendance.create({
      userId: req.user.id
    });

    res.json(record);
  } catch(err){
    res.status(500).json(err.message);
  }
};

exports.getAttendance = async (req,res)=>{
  try {
    let data;

    if(req.user.role === "HR"){
      data = await Attendance.find();
    } else {
      data = await Attendance.find({userId:req.user.id});
    }

    res.json(data);
  } catch(err){
    res.status(500).json(err.message);
  }
};