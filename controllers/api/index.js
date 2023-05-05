const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const commentRoutes = require("./commentRoutes.js");

//pass each API route to router
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;