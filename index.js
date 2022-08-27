const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '092000Pw',
  database: 'join_us',
});

// const q = 'SELECT COUNT(*) as total FROM users ';

// connection.query(q, (error, results, fields) => {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// const end_result = connection.query(
//   'INSERT INTO users SET ?',
//   person,
//   function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   }
// );

// for (let index = 0; index < 500; index++) {
//   const person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past(),
//   };

//   connection.query('INSERT INTO users SET ?', person, function (err, result) {
//     if (err) throw err;
//     //   console.log(result);
//   });
// }

// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

connection.end();
