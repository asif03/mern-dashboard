import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import { sendOtp } from "../utils/email.js";

export const checkUser = async (req, res) => {
  const { email } = req.query;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already taken." });
    } else {
      //return res.status(200).json({ message: "User is free." });
      //const email = req.body.email;
      const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP expiry after 10 minutes

      const result = await sendOtp(email, otp);

      console.log(result);

      /*if (result.status === 200) {
        console.log("asif");
      } else {
        console.log("Not Sent");
      }*/
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already exist." });
    }

    if (password == !confirmPassword) {
      return res.status(400).json({ message: "Password not matched." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: [{ firstName: firstName, lastName: lastName }],
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User does't exist." });
    }

    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (err) return res.status(404).json({ message: "Error Occurs!" });
      if (!result) return res.status(404).json({ message: "Invalid password" });

      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).json({ user: existingUser, token });
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

export const logout = async (req, res) => {};
