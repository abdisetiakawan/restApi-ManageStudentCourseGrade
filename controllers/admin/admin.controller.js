const bcrypt = require("bcryptjs");
const { User, Dosen, Mahasiswa } = require("../../models");

exports.createUser = async (req, res) => {
  const { role, email, password, username, ...otherDetails } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    let newRoleUser;
    if (role === "dosen") {
      newRoleUser = await Dosen.create({
        ...otherDetails,
        userId: newUser.id,
      });
    } else if (role === "mahasiswa") {
      newRoleUser = await Mahasiswa.create({
        ...otherDetails,
        userId: newUser.id,
      });
    }

    res.status(201).json({ newUser, newRoleUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, username, ...otherDetails } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await user.update({
        email,
        password: hashedPassword,
        username,
      });

      let roleUser;
      if (user.role === "dosen") {
        roleUser = await Dosen.findOne({ where: { userId: id } });
      } else if (user.role === "mahasiswa") {
        roleUser = await Mahasiswa.findOne({ where: { userId: id } });
      }

      if (roleUser) {
        await roleUser.update(otherDetails);
      }

      res.json({ user, roleUser });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "User deleted successfully", deletedUser: user });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
