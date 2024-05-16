import mysql from "mysql";

try {
  var dbcon = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });

  dbcon.connect(function (err) {
    if (!err) {
      console.log("Database connected Successfully... !!");
    } else {
      console.log("Error connecting database ... nn");
      throw err;
    }
  });
} catch (error) {
  console.log("Error connecting database ... nn", error);
}

export default dbcon;
