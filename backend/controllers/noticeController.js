const Notice = require("../models/Notice");

exports.createNotice = async (req, res) => {
  const { message, endDate } = req.body;

  const notice = await Notice.create({
    message,
    endDate
  });

  res.json(notice);
};

exports.getNotices = async (req, res) => {
  const today = new Date();

  const notices = await Notice.find({
    endDate: { $gte: today }
  }).sort({ createdAt: -1 });

  res.json(notices);
};