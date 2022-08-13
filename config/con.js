const mysql=require('mysql2');

var con = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_college',
  multipleStatements: true
  });
  
  con.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log(err);
    }
});


module.exports=con;