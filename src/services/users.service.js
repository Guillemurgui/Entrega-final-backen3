import { UserModel } from "../models/user.model.js";

class UserService {
  async getUsers() {
    return await UserModel.find();
  }

  async createUser(userData) {
    return await UserModel.create(userData);
  }
}

export const userService = new UserService();
