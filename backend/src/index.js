const express = require('express');

const app = express();
app.use(express.json());

const projects = [];
//array de projectos

app.get('/projects', (request, response) => {
    //return response.send('hello wordl');
    
    //*QUERY PARAMS
    const query = request.query;
    console.log(query);

    //...de forma isolada
    const {title, user} = request.query;
    console.log(title);
    console.log(user);

    return response.json([
        "project1",
        "projecto2"
    ]);
        //message: "hello mundo"});
    
});

app.post('/projects', (request, response) => {

    //REQUEST *BODY
    const {user, title} = request.body;
    console.log(user);
    console.log(title);

    return response.json([
        "ola",
        "ola2"
    ])
});

app.put('/projects/:test', (request, response) => {

    //ROUTE *PARAMS
    const params = request.params;
    console.log(params);


    return response.json ([
        "put 1",
        "put 3"
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json ([
        "delete 1",
        "delete 2"
    ])
})

//PORTA 
app.listen(3333, () => {
    console.log('console entra top  😎');
});