const express = require('express');

const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('I am exciting learning node with nodemon, automatic restart');
});

const users = [
    {id: 0, name:'priyanka', email: 'priya@gmail.com', phone:'01866666666'},
    {id: 1, name:'Dipika', email: 'dipika@gmail.com', phone:'01866666666'},
    {id: 2, name:'Arushi', email: 'arushi@gmail.com', phone:'01866666666'},
    {id: 3, name:'Arna', email: 'arna@gmail.com', phone:'01866666666'},
    {id: 4, name:'Purna', email: 'purna@gmail.com', phone:'01866666666'},
    {id: 5, name:'Mahi', email: 'mahi@gmail.com', phone:'01866666666'},
    {id: 6, name:'Shabnur', email: 'nur@gmail.com', phone:'01866666666'},
    {id: 7, name:'Boni', email: 'boni@gmail.com', phone:'01866666666'},
    {id: 8, name:'Suchitra', email: 'suchi@gmail.com', phone:'01866666666'}
]

// app.get('/users', (req, res) => {
//     res.send(users);
// })



app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter (user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});


// app.post method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    res.json(newUser);
})



// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


app.get('/mango', (req, res) => {
    res.send('testy');
})

app.get('/fruits/mango/ice', (req, res) => {
    res.send('yammi yammi fruits');
})




app.listen(port, () => {
    console.log('hitting to port', port);
});