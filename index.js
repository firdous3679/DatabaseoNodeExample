const express = require('express');
const app = express();
var mysql=require('mysql');

var con = mysql.createConnection({
 host : 'localhost',
 user : 'root',
 password : 'ecce5265',
});

con.connect((err) => {
 if(err) throw err;
console.log('Database Connected..');
});

// Create DB
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    con.query(sql, (err) => {
    if (err) {
    throw err;
    }
    res.send("Database created");
    });
    });
    

// Create table
app.get("/createemployee", (req, res) => {
    let sql = "CREATE TABLE nodemysql.employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
    con.query(sql, (err) => {
    if (err) {
    throw err;
    }
    res.send("Employee table created");
    });
}); 

app.get("/employee1", (req, res) => {
    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };
    let sql = "INSERT INTO nodemysql.employee SET ?";
    let query = con.query(sql, post, (err) => {
     if (err) {
    throw err;
    }
    res.send("Employee 1 added");
    });
    });
    // Update employee
app.get("/updateemployee/:id", (req, res) => {
     let newName = "Ahmed Ali";
     let sql = 'UPDATE nodemysql.employee SET name = '${newName}' WHERE id = ${req.params.id}`;
     let query = con.query(sql, (err) => {
    if (err) {
    throw err;
    }
     res.send("Post updated...");
    });
    });
    

// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
