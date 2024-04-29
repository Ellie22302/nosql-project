const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");


router.route("/").get(getUsers).post(createUser);


router.route("/:userId").get(getUserById).delete(deleteUser).put(updateUser);


router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;