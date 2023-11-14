const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'posts'
})

db.connect(err => {
    if(err) {
        throw err
    }
    console.log('MySQL Connected')
})

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('hi')
})

app.get('/api/posts/', (requset, response) => {
    const query = `SELECT * FROM posts`
    db.query(query, (err, result) => {
        if (err) throw err
        response.json(result)
    })
})

app.get('/api/posts/:id', (request, response) => {
    const query = `SELECT * FROM posts WHERE posts_id =${request.params.id}`
    db.query(query, (err, result) => {
        if (err) throw err
        response.json(result)
    })
})

app.post('/api/posts/', (request, response) => {
    let query = `CREATE TABLE IF NOT EXISTS posts (
        posts_id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(255) NULL DEFAULT NULL,
        content VARCHAR(1000) NOT NULL,
        date DATE NOT NULL,
        likes INT NOT NULL DEFAULT 0,
        preview_url VARCHAR(255) NULL DEFAULT NULL,
        PRIMARY KEY (posts_id));;`
    db.query(query, err => {
        if (err) throw err
    })

    const post = request.body
    query = `INSERT INTO posts SET ?`
    db.query(query, post, (err, result) => {
        if (err) {
            throw err
        }
        response.send('Data inserted successfully')
    })
})

// TODO: add patch for posts/:id

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

