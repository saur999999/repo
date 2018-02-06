var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "intra_atithi"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
var sql = "SELECT * FROM booking_request where date(start_date) = date(curdate()) and month(start_date) = month(curdate())";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });