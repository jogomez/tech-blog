const router = require("express").Router();
const { User, Post } = require('../models');

//render handlebars view on page load
router.get("/", async (req, res) => {
    const postData = await Post.findAll({
        //joins table
        include: [
            {
                model: User,
            //    attributes: ["id", "username"],
            },
        ],
        order: [["createdAt", "DESC"]],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("createPost", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
        posts
    });
});

module.exports = router;