const users = require("../Models/users");

const isValidEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// Middleware for validation
const validateUserData = async (req, res, next) => {
  const { number, firstName, lastName, tel, email } = req.body;

  // check data
  if (!number || !firstName || !lastName || !tel || !email) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบทุกช่อง");
  }

  if (number.length !== 6 || !/^\d+$/.test(number)) {
    return res.status(400).send("เลขประจำตัวควรมี 6 ตัว กรุณาตรวจสอบอีกครั้ง");
  }

  // check tel number
  if (!/^0\d{9}$/.test(tel)) {
    return res.status(400).send("เบอร์โทรศัพท์ไม่ถูกต้อง");
  }

  // check e-mail
  if (!isValidEmailFormat(email)) {
    return res.status(400).send("อีเมลไม่ถูกต้อง");
  }

  next();
};

exports.list = async (req, res) => {
  try {
    const userData = await users.find({}).exec();
    res.send(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await users.findOne({ _id: id }).exec();
    res.send(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.create = [
  validateUserData,
  async (req, res) => {
    try {
        console.log(req.body.number)
      const existingNumber = await users
        .findOne({ number: req.body.number })
        .exec();
      if (existingNumber) {
        return res
          .status(400)
          .send("เลขประจำตัวนี้ถูกใช้แล้ว กรุณาเลือกเลขประจำตัวอื่น");
      }
      const userData = await users(req.body).save();
      res.send(userData);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
];

exports.update = [
  validateUserData,
  async (req, res) => {
    try {
      const id = req.params.id;
      const update = await users
        .findOneAndUpdate({ _id: id }, req.body, { new: true })
        .exec();
      res.send(update);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
];

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const remove = await users.findOneAndDelete({ _id: id }).exec();
    res.send(remove);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
