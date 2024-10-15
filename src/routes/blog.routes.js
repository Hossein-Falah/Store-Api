const { Router } = require('express');

const BlogController = require('../controllers/blog.controller');
const tags = require('../middlewares/tags.middleware');
const { authenticateToken } = require('../middlewares/guard/authenticate.guard');
const { uploadMiddleware } = require('../middlewares/uploader.middleware');
const { checkPermission } = require('../middlewares/guard/permission.guard');
const { PERMISSIONS } = require('../constants/constants');

const router = Router();

const uploadBlog = uploadMiddleware('blogs')

router.get(`/`, BlogController.getAllBlogs);
router.get(`/:id`, BlogController.getBlogById);
router.post(`/create`, authenticateToken, uploadBlog.single('image'), tags("tags"), checkPermission([PERMISSIONS.ADMIN]), BlogController.createBlog);
router.patch(`/update/:id`, authenticateToken, uploadBlog.single('image'), tags("tags"), checkPermission([PERMISSIONS.ADMIN]), BlogController.updateBlogById);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), BlogController.deleteBlogById);
router.put(`/:id/like`, authenticateToken, BlogController.likeBlogById);
router.put(`/:id/bookmark`, authenticateToken, BlogController.bookmarkBlogById);

module.exports = {
    BlogRoutes: router
}