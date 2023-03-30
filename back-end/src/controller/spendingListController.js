import connection from "../services/connectDB";

const getAll = (req, res) => {
  console.log("Im here");
  connection.query(
    "SELECT * FROM rhm_expense re",
    function (err, results, fields) {
      return res.send(results);
    }
  );
};

export { getAll };
