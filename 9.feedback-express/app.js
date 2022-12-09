const commentData = [
    {
        name: '张三1',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三2',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三3',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三4',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    },
    {
        name: '张三5',
        message: 'The weather is beautiful today!',
        date: '2022-11-3'
    }
]


const express = require('express')
const app = express()
//在exoress中配置art-template
app.engine('art',require('express-art-template'))
//公开静态资源
app.use('/public',express.static('./public'))

app.get('/public/404',(req,res)=>{
    res.render('404.art')
})
app.get('/',(req,res)=>{
    res.render('index.art',{
        commentData
    })
})
app.get('/post',(req,res)=>{
    res.render('post.art')
})
app.get('/submitComment',(req,res)=>{
    const {query} = req
    //(原) const parseObj = url.parse(req.url, true) 
    const nowData = {name:query.username,message:query.message,date:new Date()}
    commentData.unshift(nowData)

    res.redirect('/')
    //(原)
    // res.statusCode = 302
    // res.setHeader('Location', '/')
    // res.end()
})
app.post('/submitComment',(req,res)=>{
    console.log(req)
})

app.listen(3000,()=>{
    console.log('server is running');
})