const { Nilai } = require("../../models");

exports.getGrades = async (req, res) => {
  try {
    const { id } = req.user;
    const grades = await Nilai.findAll({ where: { NIMMahasiswa: id } });
    res.json(grades);
  } catch (err) {
    res.status(500).send(err);
  }
};
