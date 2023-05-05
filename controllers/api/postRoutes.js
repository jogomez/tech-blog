const router = require("express").Router();
const { Post } = require("../../models");

//create post
router.post("/", async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            creator_id: req.body.creator_id,
        });
        return res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//update post
router.put("/:id", async (req, res) => {
    try {
        const updatePostData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(updatePostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const deletePostData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(deletePostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;