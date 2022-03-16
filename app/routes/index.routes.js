module.exports = app => {
    let routePrefix = "admin-api";
    //start Admin Routes
    // http://localhost:3000/admin-api/* ->
    require("./admin-api/admin.routes.js")(app,routePrefix);
    //end Admin Routes

    
    //start User Routes
    routePrefix = "user-api";
    // http://localhost:3000/user-api/* ->
    require("./user-api/user.routes.js")(app,routePrefix);
    //end User Routes
  };