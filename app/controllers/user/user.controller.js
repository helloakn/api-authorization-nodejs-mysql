const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../lib/config.js');
const UserModel = require("../../models/user.model.js");
let userModel = new UserModel();

exports.login  = async function getDetailFunction(req, res){   
    // ---:::  Beign Variable Declaration :::--- //
    const data = req.body;
	const errors = {};
    // ---:::  END Variable Declaration :::--- //
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      if (data
        && Object.keys(data).length === 0
        && Object.getPrototypeOf(data) === Object.prototype){
        
		errors.data = ['validation failed.'];
	}
    // ---::: Begin Validation :::--- //
	if (!String(req.body.email).trim()) {
		errors.email = ['Email is required'];
	}
    console.log('p');
    if (!data.password) {
		errors.password = ['Password is required'];
	}
    if (!String(req.body.password).trim()) {
		errors.password = ['Password is required'];
	}
    console.log('end p');
    // Begin to return with output 
    if (Object.keys(errors).length) {
		res.status(400).send({
            code:400,
            status: "failed!",
            error:errors
            });
        return;
	}
    // ---::: END Validation :::--- //

    // validation is passed
    let _passwordHash = crypto.createHash('md5').update(data.password).digest("hex");
    let userRecord = await userModel.getByEmailAndPassword(
        data.email,
        _passwordHash
    );
    if(userRecord){
        //generate JWT here
        const token = jwt.sign({ userAccount: userRecord,authType:"user" }, config.Secret.user, { expiresIn: '7d' });
        res.send({
            code:200,
            status : "success!",
            data :{
                id:userRecord.id,
                email:userRecord.email,
                token:token
            } 
        });
        
    }
    else{
        res.status(400).send({
            code:400,
            status: "failed!",
            error:{"msg":["Incorrected Login Information!"]}
        });
        return;
    }
};


exports.getDetail = async function setupUserFunction(req, res){ 
    
    let userRecord = await userModel.getDetailById(
        req.userAccount.id
    );

    res.status(200).send({
        code:200,
        status: "success!",
        data:userRecord
        });
    return;
 };