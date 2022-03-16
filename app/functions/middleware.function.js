var jwt = require('jsonwebtoken');
var config = require('../lib/config');

function AdminAuthMiddleWare(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var token = req.headers['x-access-token'];
    if (!token)
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'No token provided.'}]  });

    jwt.verify(token, config.Secret.admin, function(err, auth) {
    if (err)
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'Failed to authenticate token.'}]   });
        
    // if everything good, save to request for use in other routes
    //console.log(req.authType);
    if (auth.authType!='admin')
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'Failed to authenticate admin token.'}]   });
    req.authType = auth.authType;
    req.adminAccount = auth.adminAccount;
    console.log(auth.adminAccount);
    next();
    });
}
function UserAuthMiddleWare(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token)
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'No token provided.'}]  });
    console.log(config.Secret.user);
    jwt.verify(token, config.Secret.user, function(err, auth) {
    if (err)
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'Failed to authenticate token.'}]   });
       
    if (auth.authType!='user')
    return res.status(403).send({ code:403,status: 'failed!', error:[{"msg":'Failed to authenticate user token.'}]   });
    
    // if everything good, save to request for use in other routes
    req.authType = auth.authType;
    req.userAccount = auth.userAccount;
    next();
    });
}

module.exports = {AdminAuthMiddleWare,UserAuthMiddleWare};