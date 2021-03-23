const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')



const app = express();

app.use(cors());
app.use(bodyParser.json())


const users = ['Rakib', 'Tamim', 'fahim', 'shakib'];

app.get('/', (req, res) => {
    const profile = {
        name: 'Rakib',
        age: 23,
        salary: 20000

    }
    res.send(profile)
});

app.get('/profile/:id', (req, res) => {
    const UserId = req.params.id;
    console.log(req.query)
    const name = users[UserId]
    res.send({ UserId, name })
})
// post
app.post('/addUser', (req, res) => {

    const user = req.body;
    user.id = 55
    res.send(user)
})

app.listen(3000, () => console.log('listening from 3000'));