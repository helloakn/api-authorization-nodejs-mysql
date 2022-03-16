const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../lib/config.js');
const AdmineModel = require("../../models/admin.model.js");
const UserModel = require("../../models/user.model.js");
let adminModel = new AdmineModel();
let userModel = new UserModel();

exports.login  = async function loginFunction(req, res){   
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
    let adminRecord = await adminModel.getByEmailAndPassword(
        data.email,
        _passwordHash
    );
console.log(_passwordHash);
    if(adminRecord){
        //generate JWT here
        const token = jwt.sign({ adminAccount: adminRecord,authType:"admin" }, config.Secret.admin, { expiresIn: '7d' });
        res.send({
            code:200,
            status : "success!",
            data :{
                admin_id:adminRecord.id,
                email:adminRecord.email,
                name:adminRecord.name,
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


exports.setupUser = async function setupUserFunction(req, res){ 
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
    if (!data.name) {
		errors.name = ['Name is required'];
	}
    if (!String(req.body.name).trim()) {
		errors.name = ['Name is required'];
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
    let userRecord = await userModel.create({
        "name" : req.body.name,
        "email" : req.body.email,
        "password" : _passwordHash,
    });

    res.status(200).send({
        code:200,
        status: "success!",
        data:userRecord
        });
    return;
 };