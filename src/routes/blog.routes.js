const { Router } = require('express');
const { getAllBlogs, getBlogById, createBlog, updateBlogById, getCommentsForBlog, createCommentForBlog, likeBlogById, bookmarkBlogById, deleteBlogById } = require('../controllers/blog.controller');

const router = Router();

router.get(`/`, getAllBlogs);
router.get(`/:id`, getBlogById);
router.post(`/create`, createBlog);
router.patch(`/update/:id`, updateBlogById);
router.delete(`/delete/:id`, deleteBlogById);
router.get(`/:id/comment`, getCommentsForBlog);
router.post(`/:id/comment`, createCommentForBlog);
router.put(`/:id/like`, likeBlogById);
router.put(`/:id/bookmark`, bookmarkBlogById);

module.exports = {
    BlogRoutes: router
}