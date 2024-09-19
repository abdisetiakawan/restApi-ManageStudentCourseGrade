const { Dosen, Nilai, Mahasiswa } = require("../../models");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Mahasiswa.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createGrade = async (req, res) => {
  try {
    const {
      NIMMahasiswa,
      KodeMataKuliah,
      NilaiAbsensi,
      NilaiTugas,
      NilaiUTS,
      NilaiUAS,
      NilaiAkhir,
    } = req.body;

    const newGrade = await Nilai.create({
      NIMMahasiswa,
      KodeMataKuliah,
      NilaiAbsensi,
      NilaiTugas,
      NilaiUTS,
      NilaiUAS,
      NilaiAkhir,
    });
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateGrade = async (req, res) => {
  const { IDNilai } = req.params;
  const { NilaiAbsensi, NilaiTugas, NilaiUTS, NilaiUAS, NilaiAkhir } =
    req.body;
  try {
    const nilai = await Nilai.findByPk(IDNilai);
    if (nilai) {
      await nilai.update({
        NilaiAbsensi,
        NilaiTugas,
        NilaiUTS,
        NilaiUAS,
        NilaiAkhir,
      });
      res.json(nilai);
    } else {
      res.status(404).send("Grade not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteGrade = async (req, res) => {
  const { IDNilai } = req.params;
  try {
    const nilai = await Nilai.findByPk(IDNilai);
    if (nilai) {
      await nilai.destroy();
      res.json({ message: "Grade deleted successfully", deletedGrade: nilai });
    } else {
      res.status(404).send("Grade not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
