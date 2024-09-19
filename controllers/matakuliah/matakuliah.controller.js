const { MataKuliah } = require("../../models");

exports.getAllMataKuliah = async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.findAll();
    res.json(mataKuliah);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMataKuliahByKode = async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.findByPk(req.params.kode);
    if (!mataKuliah)
      return res.status(404).json({ error: "MataKuliah not found" });
    res.json(mataKuliah);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createMataKuliah = async (req, res) => {
  const { KodeMataKuliah, NamaMataKuliah, SKS } = req.body;
  try {
    const mataKuliah = await MataKuliah.create({
      KodeMataKuliah,
      NamaMataKuliah,
      SKS,
    });
    res.status(201).json(mataKuliah);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
