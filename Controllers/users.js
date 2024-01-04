const users = require("../Models/users");

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

exports.create = async (req, res) => {
  try {
    const userData = await users(req.body).save();
    res.send(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
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
};

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
