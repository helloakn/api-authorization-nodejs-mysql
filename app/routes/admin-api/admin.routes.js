
module.exports = (app,prefix) => {
const AdminController = require("../../controllers/admin/admin.controller.js");
const {AdminAuthMiddleWare} = require("../../functions/middleware.function.js");
  // http://localhost:3000/admin-api/admin/* ->
  app.prefix(`/${prefix}/admin`, function (adminRoute) {
    // http://localhost:3000/admin-api/admin/login ->
    adminRoute.route('/login').post(AdminController.login); 
    adminRoute.route('/setup-user').post(AdminAuthMiddleWare,AdminController.setupUser); 
  });
};