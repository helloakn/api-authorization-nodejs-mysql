
module.exports = (app,prefix) => {
  const UserController = require("../../controllers/user/user.controller.js");
  const {UserAuthMiddleWare} = require("../../functions/middleware.function.js");
    // http://localhost:3000/admin-api/admin/* ->
    app.prefix(`/${prefix}/user`, function (userRoute) {
      // http://localhost:3000/user-api/user/login ->
      userRoute.route('/login').post(UserController.login); 
      // http://localhost:3000/user-api/user/getdetail ->
      userRoute.route('/getdetail').post(UserAuthMiddleWare,UserController.getDetail); 
    });
  };