const express = require("express")
const app = express()
const fileP = require('fs');

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('login')
})

app.post("/info", (req, res) => {
    let userName = (req.body.username).toUpperCase()
    let password = parseInt(req.body.pass)
    if (userName === 'ADMIN' && password === 123456) {
        res.render('info')
    } else {
        res.render('warning')
    }
})

app.post('/login', (req,res) => {
    res.render('login')
})

app.post("/end", (req,res) => {
    let fname = req.body.fname
    let lname = req.body.lname
    let bdate = req.body.bdate
    let age = req.body.age
    let address = req.body.address
    let email = req.body.email
    const data = "- " + " " + "First Name:" + fname + " " +
                 "Last Name" + lname + " " +
                 "Birth Date" + bdate + " " +
                 "Age" + age + " " +
                 "Address:" + address + " " +
                 "Email:" + email
    fileP.appendFile('Data/data.txt', data , function(err, file) {
        if (err) throw err;
        console.log('Saved!');
        res.end();
    });
    res.render('end')
})

app.listen(3000)
console.log('running in port 3000')
