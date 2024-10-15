const createHttpError = require("http-errors");
const { PERMISSIONS } = require("../../constants/constants");
const PermissionModel = require("../../models/permission.model");
const RoleModel = require("../../models/role.model");

function checkPermission (requiredPermissions = []) {
    return async function (req, res, next) {
        try {
            const allPermissions = requiredPermissions.flat(2);
            const user = req.user;
            const role = await RoleModel.findOne({ title: user.role });            
            if (!role) throw new createHttpError.NotFound("نقش یافت نشد");
            const permissions = await PermissionModel.find({ _id: { $in: role.permissions }});
            if (!permissions) throw new createHttpError.NotFound("دسترسی یافت نشد");
            const userPermissions = permissions.map(permission => permission.name);
            const hasPermission = allPermissions.every(permission => {
                return userPermissions.includes(permission);
            });

            if (userPermissions.includes(PERMISSIONS.ALL)) return next();
            if (allPermissions.length == 0 || hasPermission) return next();

            throw new createHttpError.Forbidden("شما اجازه دسترسی به این بخش را ندارید"); 
        } catch (error) {
            next(error);
        }
    }
};

module.exports = {
    checkPermission
}