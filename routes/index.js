const express = require('express')
const router = express.Router()
const loginRouter = require('./login')
const exploreRouter = require('./explore')
const profilesRouter = require('./profiles')

router.use('/login', loginRouter)
router.use('/explore', exploreRouter)
router.use('/profiles', profilesRouter)

router.get('/', (req, res) => {
    res.redirect('/login')
})

module.exports = router