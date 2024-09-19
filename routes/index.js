const express = require("express");
const router = express.Router();
const {
  adminController,
  authController,
  dosenController,
  mahasiswaController,
  matakuliahController,
} = require("../controllers");

// Contoh route untuk admin
router.post("/admin/create-user", adminController.createUser);
router.put("/admin/edit-user/:id", adminController.editUser);
router.delete("/admin/delete-user/:id", adminController.deleteUser);

// Contoh route untuk auth
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// Route lainnya
router.get("/dosen/students", dosenController.getAllStudents);
router.post("/dosen/grade", dosenController.createGrade);
router.put("/dosen/grade/:IDNilai", dosenController.updateGrade);
router.delete("/dosen/grade/:IDNilai", dosenController.deleteGrade);

router.get("/mahasiswa/grades", mahasiswaController.getGrades);

router.get("/matakuliah", matakuliahController.getAllMataKuliah);
router.get("/matakuliah/:kode", matakuliahController.getMataKuliahByKode);
router.post("/matakuliah", matakuliahController.createMataKuliah);

module.exports = router;
