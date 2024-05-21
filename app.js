const express = require ('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000;

API_URL = '682bfdd55ad14f3186a2d0196e5c557c';

app.use(express.static('public'))
app.use(express.static(__dirname + 'public/css'))

app.set('views','./src/views')
app.set('view engine','ejs')

const newsRouter = require('./src/routes/news')

app.use('/',newsRouter)

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})