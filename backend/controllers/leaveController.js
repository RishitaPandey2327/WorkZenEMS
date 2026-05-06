const Leave = require("../models/Leave");

exports.applyLeave = async (req,res)=>{
  try {
    const leave = await Leave.create({
      userId: req.user.id,
      reason: req.body.reason
    });

    res.json(leave);
  } catch(err){
    res.status(500).json(err.message);
  }
};

// exports.getLeaves = async (req,res)=>{
//   try {
//     let leaves;

//     if(req.user.role === "HR"){
//       leaves = await Leave.find();
//     } else {
//       leaves = await Leave.find({userId:req.user.id});
//     }

//     res.json(leaves);
//   } catch(err){
//     res.status(500).json(err.message);
//   }
// };
exports.getLeaves = async (req, res) => {
  try {
    let leaves;

    if (req.user.role === "HR") {
      // HR gets ALL leaves + employee info
      leaves = await Leave.find().populate("userId", "name email");
    } else {
      // Employee gets ONLY their leaves
      leaves = await Leave.find({ userId: req.user.id });
    }

    res.json(leaves);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

// exports.updateLeaveStatus = async (req,res)=>{
//   try {
//     const leave = await Leave.findByIdAndUpdate(
//       req.params.id,
//       {status:req.body.status},
//       {new:true}
//     );

//     res.json(leave);
//   } catch(err){
//     res.status(500).json(err.message);
//   }
// };
exports.updateLeaveStatus = async (req, res) => {
  const { status } = req.body;

  const leave = await Leave.findById(req.params.id);

  if (!leave) return res.status(404).json("Not found");

  leave.status = status;
  await leave.save();

  res.json(leave);
};