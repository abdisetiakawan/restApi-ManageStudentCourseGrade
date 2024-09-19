const adminController = require("./admin/admin.controller");
const authController = require("./auth/auth.controller");
const dosenController = require("./dosen/dosen.controller");
const mahasiswaController = require("./mahasiswa/mahasiswa.controller");
const matakuliahController = require("./matakuliah/matakuliah.controller");

module.exports = {
  adminController,
  authController,
  dosenController,
  mahasiswaController,
  matakuliahController,
};
