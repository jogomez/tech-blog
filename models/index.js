const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: "creator_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

User.hasMany(Comment, {
    foreignKey: "creator_id",
    onDelete: "CASCADE",
});

module.exports = { User, Post, Comment};