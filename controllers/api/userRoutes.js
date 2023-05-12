const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            //isAdmin: req.body.is_admin,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            return res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// user login
router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!userData) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }
        //checks that password is valid using custom instance method in ./models/user.js
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }
        //save data to session for use elsewhere
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            console.log("Session cookie: ", req.session.cookie);

            res.status(200).json({
                user: userData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// User Logout
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
