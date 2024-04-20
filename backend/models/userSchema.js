import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: [
    {
      firstName: String,
      lastName: {
        type: String,
        require: true,
      },
    },
  ],
  email: { type: String, require: true },
  password: { type: String, require: true },
  varified: { type: Boolean, default: false },
  updatedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
