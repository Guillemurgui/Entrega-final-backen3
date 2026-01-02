import { userService } from "../services/users.service.js";

export const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};
