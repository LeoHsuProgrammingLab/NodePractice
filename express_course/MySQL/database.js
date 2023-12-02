import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({ // a collection of connection
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise() // no need for callback function, now is async await

// JS: [variable]: the array containing the first item in the array
export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
}

export async function getNote(id) {
    const [rows] = await pool.query(
    `
    SELECT * FROM notes 
    WHERE id = ?
    `, [id]
    )
    return rows[0]
}

export async function createNote(title, content) {
    const [result] = await pool.query(
    `
       INSERT INTO notes (title, contents)
       VALUES (?, ?)
    `, [title, content]
    )
    const id = result.insertId
    return getNote(id)
}

// await is to make asynchronous function synchronous
// const notes = await getNote(10)
// console.log(notes)
const result = await createNote('test', 'test')
console.log(result)