const Blog = require('./models/blogs')
const express = require('express')
const app = express()

app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
})

app.listen(3002, () => {
  console.log('server running on port:', 3002)
})
