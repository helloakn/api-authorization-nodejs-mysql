module.exports = {

  Database:{
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME
  },
  Secret:{
    admin:"789hjkty5^&YHTYUJHT^&*IKHUIHT&*UJHT^&UJTYUIjt678ijntuif56yhgde45tfsw456yhtyUIKGT&",
    user:"kjy78ijgyuhg^&*U&*IKHU*IJY&*IJHG78ikjn8ikh8ijfe434567ujhgfdszxcvbnmkuytfdGU^%$EDFGH"
  },
  Origin:{
    allowFrom:process.env.ALLOW_FROM
  }
  
};