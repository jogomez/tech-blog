const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const loginRoutes = require("./loginRoutes");
const postRoutes = require("./postRoutes");
const signupRoutes = require("./signupRoutes");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use("/login", loginRoutes);
router.use("/post", postRoutes);
router.use("/signup", signupRoutes);

module.exports = router;