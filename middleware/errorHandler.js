const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("statusCode", statusCode)
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case 200: //No idea why I am getting 200 in error prompt -.-
            res.json({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stack
            })
            break;


        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        default:
            res.json({
                title: "Unknown Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    }

}

module.exports = errorHandler