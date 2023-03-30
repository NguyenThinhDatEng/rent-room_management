// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "bcgzcy59gdboti5vmver-mysql.services.clever-cloud.com",
  user: "u1p4hrlcqbtzc4j7",
  database: "bcgzcy59gdboti5vmver",
  password: "FEMKTosG2EyGAb9tvtwU",
});

export default connection;
