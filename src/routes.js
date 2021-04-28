const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');

// https://github.com/mysqljs/mysql

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zans',
  database : 'ciki'
});

// Initialize the app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// https://expressjs.com/en/guide/routing.html
app.get('/ph', function (req, res) {
  //  connection.connect();
      
    connection.query("SELECT person.Name, GROUP_CONCAT(hobbies.Name ) AS hobbies, DATE_FORMAT(person.Geburtsdatum,'%d-%M-%Y') AS Geburtsdatum FROM `ph`, `person`, `hobbies` WHERE ph.PersNr = person.PersNr AND ph.HNr = hobbies.HNr GROUP BY person.Name ", function (error, results, fields) {
      if (error) throw error;
        res.send(results);  
   
    });

    //select DATE_FORMAT(Person.Geburtsdatum,'%d-%M-%Y') from Person


   // connection.end();
   
});






// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/Ph to see posts');
}); 