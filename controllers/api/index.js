const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const commentRoutes = require("./commentRoutes.js");

//pass each API route to router
//http://localhost:3001/api/user
router.use("/user", userRoutes);
//http://localhost:3001/api/post
router.use("/post", postRoutes);
//http://localhost:3001/api/comment
router.use("/comment", commentRoutes);

module.exports = router;