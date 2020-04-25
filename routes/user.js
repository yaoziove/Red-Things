const userRouter = require('express').Router()

userRouter.get('/',function(req,res){
  res.send('users')
})

module.exports = userRouter