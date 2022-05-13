const express = require('express')
const router = express.Router()

// @desc Login/Landing page
// @route Get /
router.get('/', (req,res)=>{
    res.send('<h1>Login</h1>')
})

// @desc Dashboard
// @route Get /dashboard
router.get('/dashboard', (req,res)=>{
    res.send('<h1>Dashboard</h1>')
})

module.exports = router