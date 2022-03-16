const SqlAdapter = require("./sqlAdapter.js");


class User extends SqlAdapter{
  constructor() {
    super();
    this.tableName = "User";
  }

  async create(newRecord){
    // call the function of the parent class
    //newRecord.created_by = 8;
    return this.insertData(this.tableName,newRecord);
  } // end async function

  getByEmailAndPassword = async (email,password) => {
   // call the function of the parent class
    return this.getRecordByQuery(`SELECT * FROM ${this.tableName} WHERE email='${email}' AND password='${password}'`);
   
  }//end function
  
  async getDetailById(id){
    // call the function of the parent class
    return this.getRecordByQuery(`SELECT * FROM ${this.tableName} WHERE id=${id}`);
  } // end async function

}//end class

module.exports = User;