import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birthDate: {
    day: { type: String },
    month: { type: String },
    year: { type: String }
  },
  gender: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: {
    areaCode: { type: String },
    number: { type: String }
  },
  DNI: { type: String },
  location: {
    province: { type: String },
    city: { type: String }
  },
  address: {
    street: { type: String },
    number: { type: String },
    apartment: { type: String }
  },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);