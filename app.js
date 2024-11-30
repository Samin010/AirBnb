const path=require('path')
const express=require('express')
// local module
const userRouter=require("./routes/userRouter")
const {hostRouter} = require('./routes/hostRouter')
const homeRouter = require('./routes/homeRouter')
const rootDir=require('./utils/pathUtil')

const app=express()
app.set('view engine','ejs')
app.set('views','views')



app.use(express.urlencoded())
app.use(homeRouter)
app.use(userRouter)
app.use(hostRouter);


// Hello

app.use(express.static(path.join(rootDir, "public")));
app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})


const PORT=3001
app.listen(PORT,()=>{
  console.log(`Server running at PORT ${PORT}`)
})