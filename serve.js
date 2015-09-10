var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded


var userData = [
    {id:0, fName:'Hege', lName:"Pege", sex: "Male", age: "23" },
    {id:1, fName:'Kim',  lName:"Pim", sex: "Male", age: "25" },
    {id:2, fName:'Sal',  lName:"Smith", sex: "Male", age: "37" },
    {id:3, fName:'Jack', lName:"Jones", sex: "Male", age: "20" },
    {id:4, fName:'John', lName:"Doe", sex: "Male", age: "44" },
    {id:5, fName:'Peter',lName:"Pan", sex: "Male", age: "57" },
    {id:6, fName:'Joyce', lName:"Allan", sex: "Female", age: "33" },
    {id:7, fName:'Lily',  lName:"Pim", sex: "Female", age: "58" },
    {id:8, fName:'Lucy',  lName:"Elias", sex: "Female", age: "32" },
    {id:9, fName:'Mary', lName:"Ellison", sex: "Female", age: "45" },
    {id:10, fName:'Linda', lName:"Oliva", sex: "Female", age: "41" },
    {id:11, fName:'Amanda',lName:"Wills", sex: "Female", age: "34" }
];

app.use(express.static('app'));

app.get('/getUserList', function(req, res){
    res.json(userData);
});

app.get('/getUser/:id', function(req, res) {
    var newUser = {};
    var i;
    for (i in userData) {
        if (userData[i].id == req.params.id) {
            newUser = userData[i];
        }
    }
    res.send(newUser);
});

app.delete('/deleteUser/:id', function(req, res) {
    var i;
    for (i in userData) {
        if (userData[i].id == req.params.id) {
            userData.splice(i, 1);
        }
    }
    res.json(true);
});


app.post('/saveUser/:id', function(req, res) {
    var i;
    for (i in userData) {
        if (userData[i].id == req.params.id) {
            userData[i].fName = req.body.fName;
            userData[i].lName = req.body.lName;
            userData[i].sex = req.body.sex;
            userData[i].age = req.body.age;
            res.send(userData[i]);
        }
    }
});

app.post('/createUser', function(req, res) {
    var newUser = {};
    var i;
    var num = userData[0].id;
    for (i=1; i<userData.length; i++) {
        num = Math.max(userData[i].id, num);
    }
    num++;
    newUser.id = num;
    newUser.fName = req.body.fName;
    newUser.lName = req.body.lName;
    newUser.sex = req.body.sex;
    newUser.age = req.body.age;
    userData.push(newUser);
    res.send(newUser);
});

app.listen(3000);
