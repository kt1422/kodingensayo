const router = require('express').Router();

router.get('/home', (req, res)=>{
    res.render('home', {title:"Koding Ensayo"});
});

module.exports = router;