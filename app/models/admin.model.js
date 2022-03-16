const SqlAdapter = require("./sqlAdapter.js");

class Admin extends SqlAdapter{

  constructor() {
    super();
    this.tableName = "Admin";
  }

  getByEmailAndPassword = async (email,password) => {
   // call the function of the parent class
    return this.getRecordByQuery(`SELECT * FROM ${this.tableName} WHERE email='${email}' AND password='${password}'`);
   
  }//end function
  
  async getDetailById(id){
    // call the function of the parent class
    return this.getRecordByQuery(`SELECT * FROM ${this.tableName} WHERE id=${id}`);
  } // end async function

}//end class

module.exports = Admin;