const { StatusCodes } = require("http-status-codes");
const Controller = require("./controller");

class AuthController extends Controller {
    async login(req, res, next) {
        try {
            res.status(StatusCodes.OK).json({
                message: "login successfully"
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    AuthController: new AuthController()
}