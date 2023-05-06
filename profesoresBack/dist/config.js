"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.cloudinaryConfig = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
};
exports.cloudinaryConfig = cloudinaryConfig;
var config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.config = config;