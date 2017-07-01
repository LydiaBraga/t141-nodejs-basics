const express = require('express');
const router = express.Router();

let db = [
    {
        id: 1,
        name: "Lydia Braga",
        email: "lydiaccb@hotmail.com"
    },
    {
        id: 1,
        name: "Maria",
        email: "maria@hotmail.com"
    },
    {
        id: 1,
        name: "João",
        email: "joao@hotmail.com"
    },
    {
        id: 1,
        name: "Ana",
        email: "ana@hotmail.com"
    }
];

router.get('/', (request, response) => {
    response.json(db);
});

router.get('/:id', (request, response) => {
    let subscriber = db.find(sub => sub.id == request.params.id);

    if (subscriber) {
        response.json(subscriber);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.post('/', (request, response) => {
    let newSubscriber = {
        id: db.length + 1,
        name: request.body.name,
        email: request.body.email
    };

    db.push(newSubscriber);

    response.status(201).json(newSubscriber);

});

module.exports = router;