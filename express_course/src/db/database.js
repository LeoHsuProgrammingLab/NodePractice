const mysql = require('mysql2');
const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '/Users/leohsuinthehouse/Desktop/碩三上學期/CNAD/express_course/src/db/.env')
dotenv.config({path: envPath});

// method 1
console.log(process.env.c_HOST)
module.exports = mysql.createConnection({
    host: process.env.c_HOST,
    user: process.env.c_USER,
    password: process.env.c_PASSWORD,
    database: process.env.c_DATABASE
})

// // method 2
// const pool = mysql.createPool({
//   host: process.env.c_HOST,
//   user: process.env.c_USER,
//   password: process.env.c_PASSWORD,
//   database: process.env.c_DATABASE
// }).promise();

// // JS: [variable]: the array containing the first item in the array
// async function getNotes() {
//   const [rows] = await pool.query('SELECT * FROM users');
//   return rows;
// }

// async function getNote(id) {
//   const [rows] = await pool.query(
//     `
//     SELECT * FROM users 
//     WHERE id = ?
//     `,
//     [id]
//   );
//   return rows[0];
// }

// async function createNote(name, hobby) {
//   const [result] = await pool.query(
//     `
//        INSERT INTO users (name, hobby)
//        VALUES (?, ?)
//     `,
//     [name, hobby]
//   );
//   const id = result.insertId;
//   return getNote(id);
// }

// async function main() {
//     try {
//         // const result = await createNote('John', 'Sleep');
//         const result = await getNotes();
//         console.log(result);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// // Example usage:
// // const notes = await getNote(10);
// // console.log(notes);
// main()