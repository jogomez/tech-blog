const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
        });
        try {
            const postData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["id", "username"],
                    },
                ],
                order: [["createdAt", "ASC"]],
            });

            const posts = postData.map((post) => post.get({ plain: true }));
            console.log(posts);
            res.render("dashboard", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                posts: posts,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
});