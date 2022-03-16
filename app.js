require('dotenv').config();
const express = require("express");
const cors = require("cors");
const config = require('./app/lib/config.js');


// prefixing the multi routes
express.application.prefix = express.Router.prefix = function (path, configure) {
    var router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
  };
// end prefixing the multi routes

const app = express();
var corsOptions = {
  origin: config.Origin.allowFrom
};
app.use(cors(corsOptions));
// Parse URL-encoded bodies (as sent by HTML forms)

app.use(
    express.urlencoded({
      extended: true
    })
)
  
app.use(express.json())
  

// simple route
app.post("/test", function(req,res) {
    console.log(req.body);
    res.json({ message: "This is testing route" });
});

require("./app/routes/index.routes.js")(app);

const PORT = process.env.SVR_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});