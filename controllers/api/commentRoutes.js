const router = require("express").Router();
const { Comment } = require("../../models");

//create comment
router.post("/", async (req, res) => {
    try {
        const commentData = await Comment.create({
            comment: req.body.comment,
            creator_id: req.body.creator_id,
            post_id: req.body.post_id,
        });
        return res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//delete comment
router.delete("/:id", async (req, res) => {
    try {
        const deleteCommentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(deleteCommentData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;