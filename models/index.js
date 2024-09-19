// models/index.js
const sequelize = require("../config/database");
const User = require("./entities/User");
const Dosen = require("./entities/Dosen");
const Mahasiswa = require("./entities/Mahasiswa");
const MataKuliah = require("./entities/MataKuliah");
const Nilai = require("./entities/Nilai");

Dosen.hasMany(MataKuliah, { foreignKey: "NIDN" });
MataKuliah.belongsTo(Dosen, { foreignKey: "NIDN" });

Mahasiswa.hasMany(Nilai, { foreignKey: "NIMMahasiswa" });
MataKuliah.hasMany(Nilai, { foreignKey: "KodeMataKuliah" });

module.exports = {
  sequelize,
  User,
  Dosen,
  Mahasiswa,
  MataKuliah,
  Nilai,
};
