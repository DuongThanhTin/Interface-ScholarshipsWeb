const express = require("express");
var app = express();
const router = express.Router();
const cors = require("cors");
const API_user = require('../api/user')
router.use(cors());


//Login
router.post("/login", API_user.postLogin);

//Signup
router.post("/signup", API_user.postSignup);
//Logout
router.post("/logout", API_user.postLogout);






module.exports = router;
