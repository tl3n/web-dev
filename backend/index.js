const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

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

app.use (cors())

app.get('/', (request, response) => {
    response.send('hi')
})

app.get('/api/posts/', (requset, response) => {
    const query = `SELECT * FROM posts`
    db.query(query, (err, result) => {
        if (err) {
            response.status(500).send(`Can't get this post`)
            console.error('Error in GET:', err)
        }
        else response.json(result)
    })
})

app.get('/api/posts/:id', (request, response) => {
    const query = `SELECT * FROM posts WHERE post_id =${request.params.id}`
    db.query(query, (err, result) => {
        if (err) {
            response.status(500).send(`Can't get this post`)
            console.error('Error in GET:', err)
        }
        else response.json(result)
    })
})

app.post('/api/posts/', (request, response) => {
    let query = `CREATE TABLE IF NOT EXISTS posts (
        post_id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        date DATE NOT NULL,
        likes INT NOT NULL DEFAULT 0,
        preview_url VARCHAR(255) NULL DEFAULT NULL,
        PRIMARY KEY (post_id));;`
    db.query(query, err => {
        if (err) throw err
    })

    const post = request.body
    query = `INSERT INTO posts SET ?`
    db.query(query, post, (err, result) => {
        if (err) {
            response.status(500).send(`Post wasn't sent.`)
            console.error('Error in POST:', err)
        }
        else response.send('Post created successfully!')
    })
})

app.patch('/api/posts/:id', (request, response) => {
    const query = `UPDATE posts SET ? WHERE post_id = ${request.params.id}`
    const update = request.body
    db.query(query, update, (err, result) => {
        if (err) {
            response.status(500).send(`Update wasn't applied.`)
            console.error('Error in PATCH:', err)
        }
        else response.send('Post updated successfully!')
    })
})

app.delete('/api/posts/:id', (request, response) => {
    const query = `DELETE FROM posts WHERE post_id = ${request.params.id}`
    db.query(query, (err, result) => {
        if (err) {
            response.status(500).send(`Post wasn't deleted`)
            console.error('Error in DELETE:', err)
        }
        else response.send('Post deleted successfully!')
    })
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

