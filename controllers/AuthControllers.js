const User = require("../models/admin.login.model");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = {firstName: "", lastName: "", gender: "", country: "", phone: "", email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect firstName") {
    errors.firstName = "First Name is not registered";
  }
  if (err.message === "incorrect lastName") {
    errors.lastName = "Last Name is not registered";
  }
  if (err.message === "incorrect gender") {
    errors.gender = "Gender is not incorrect";
  }
  if (err.message === "incorrect country") {
    errors.country = "Country is not incorrect";
  }
  if (err.message === "incorrect phone number") {
    errors.phone = "This phone number is not registered";
  }
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const {firstName, lastName, gender, country, phone, email, password } = req.body;
    const user = await User.create({ firstName, lastName, gender, country, phone, email, password });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};