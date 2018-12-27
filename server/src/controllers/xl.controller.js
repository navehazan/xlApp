const BaseController = require("./base.controller");
const XlModel = require("../models/Xls");

class UserController extends BaseController {
  constructor() {
    super(XlModel);
  }
}

module.exports = UserController;
