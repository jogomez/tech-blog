const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const loginRoutes = require("./loginRoutes");
const postRoutes = require("./postRoutes");
const signupRoutes = require("./signupRoutes");
const createPostRoutes = require("./createPostRoutes");
const createCommentRoutes = require("./createCommentRoutes");

// Html routes
router.use('/', homeRoutes);
router.use("/login", loginRoutes);
router.use("/post", postRoutes);
router.use("/signup", signupRoutes);
router.use("/create", createPostRoutes);
router.use("/comment", createCommentRoutes);

//API routes
//http://localhost:3001/api
router.use('/api', apiRoutes);


module.exports = router;