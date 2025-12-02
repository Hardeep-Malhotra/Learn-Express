

const express = require('express');
const app = express();
const PORT = 3000;

const blog = express()
const blogAdmin = express()

app.use('/user', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'