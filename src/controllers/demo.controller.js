const { HTTPResponse, HTTPError } = require("../utils/response")
const statusCodes = require("http-status-codes")


const protectedUser = async (req, res) => {
    let response = new HTTPResponse("protected user response", statusCodes.OK)
    return res.status(statusCodes.OK).json(response);
}
module.exports = {
    protectedUser
}