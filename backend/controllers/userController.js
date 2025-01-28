import UserSchema from "../models/UserSchema.js";

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


