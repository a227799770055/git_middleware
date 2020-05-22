// app.js
const express = require('express')
const app = express()
const port = 3000
let NowDate = new Date()
const initTime = Date.now()

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()

})

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
})

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
})


app.use((req, res, next) => {
  console.log(NowDate.toLocaleString(), "|", req.method, "from", req.originalUrl, "|", "total time:", Date.now() - initTime, "ms")
  next()
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

