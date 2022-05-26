import express from "express";
import {
  createUser,
  getUser,
  userDetail,
  userDelete,
  updateUser,
} from "../controller/users.js";

const router = express.Router();

// all routes here start with /users
router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", userDetail);

router.delete("/:id", userDelete);

router.patch("/:id", updateUser);

export default router;
