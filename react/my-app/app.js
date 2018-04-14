const express = require('express');
const app = express();
const path    = require("path");
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MongoDB
const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

function connect(cb) {
    MongoClient.connect(url, function(err, client) {
        const db = client.db('todolist');
        cb(db, client);
    })
}

//******* INSERT FUNCTIONS *******//

const insertDocuments = function(db, data, callback) {
    // Get the documents collection
    const collection = db.collection('tickets');
    // Insert some documents
    collection.insertOne(data, function(err, result) {
        callback(result);
    });
};

function insert(res, data) {
    connect(function (db, client) {
        insertDocuments(db, data, function(result) {
            client.close();
            res.send(result);
        });
    });
}

app.post('/insert', function(req, res) {
    insert(res, req.body.ticket);
});

//******* UPDATE FUNCTIONS *******//

const updateDocuments = function(db, id, data, callback) {
    // Get the documents collection
    const collection = db.collection('tickets');
    // Insert some documents
    collection.updateOne(id, data, function(err, result) {
        callback(result);
    });
};

function update(res, id, data) {
    connect(function (db, client) {
        updateDocuments(db, id, data, function(result) {
            client.close();
            res.send(result);
        });
    });
}

//******* ADD FAVORITE POST *******//

app.post('/favorite', function(req, res) {
    let query = {_id: ObjectID(req.body.ticket._id)};
    update(res, query, {$set: {favorite: !req.body.ticket.favorite}});
});

//******* ADD DONE POST *******//

app.post('/done', function(req, res) {
    let query = {_id: ObjectID(req.body.ticket._id)};
    update(res, query, {$set: {done: !req.body.ticket.done}});
});

//******* EDIT POST *******//

app.post('/edit', function(req, res) {
    let query = {_id: ObjectID(req.body.ticket._id)};
    let newData = {$set:{name: req.body.ticket.name, description: req.body.ticket.description}};
    update(res, query, newData);
});

//******* FIND FUNCTIONS *******//

function find(res) {
    connect(function (db, client) {
        findDocuments(db, function(docs) {
            client.close();
            res.send(docs);
        });
    });
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('tickets');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        //console.log(docs, 'checking result from findDocuments');
        callback(docs);
    });
};

//******* FETCH ALL TICKETS *******//

app.get('/fetch', function(req, res) {
    find(res);
});

//******* RETURN INDEX.HTML ON GET METHODS *******//

app.get('/tickets/:_id', function(req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));

});

//******* POST TICKETS *******//

app.post('/tickets/:_id', function(req, res) {
    find(res);
});

//******* DELETE FUNCTIONS *******//

const deleteDocuments = function(db, id, callback) {
    // Get the documents collection
    const collection = db.collection('tickets');
    // Delete some documents
    collection.deleteOne(id, function(err, result) {
        callback(result);
    });
};

function deleteOneTicket(res, id) {
    connect(function (db, client) {
        deleteDocuments(db, id, function(result) {
            client.close();
            res.send(result);
        });
    });
}

//******* DELETE POST *******//

app.post('/deleteOne', function(req, res) {
    let query = {_id: ObjectID(req.body.ticket._id)};
    deleteOneTicket(res, query);
});

app.listen(8010);
console.log('hello world');