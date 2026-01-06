var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = 3030;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

var reviews_data = JSON.parse(fs.readFileSync("reviews.json", 'utf8'));
var dealerships_data = JSON.parse(fs.readFileSync("dealerships.json", 'utf8'));

mongoose.connect("mongodb://mongo_db:27017/", { 'dbName': 'dealershipsDB' });

var Reviews = require('./review');
var Dealerships = require('./dealership');

Reviews.deleteMany({}, function(err) {
    if (!err) {
        Reviews.insertMany(reviews_data['reviews'], function(err2) {
            if (err2) console.log(err2);
        });
    } else {
        console.log(err);
    }
});

Dealerships.deleteMany({}, function(err) {
    if (!err) {
        Dealerships.insertMany(dealerships_data['dealerships'], function(err2) {
            if (err2) console.log(err2);
        });
    } else {
        console.log(err);
    }
});

// Express route to home
app.get('/', function(req, res) {
    res.send("Welcome to the Mongoose API");
});

// Express route to fetch all reviews
app.get('/fetchReviews', function(req, res) {
    Reviews.find(function(err, documents) {
        if (err) {
            res.status(500).json({ error: 'Error fetching documents' });
        } else {
            res.json(documents);
        }
    });
});

// Express route to fetch reviews by dealer
app.get('/fetchReviews/dealer/:id', function(req, res) {
    Reviews.find({ dealership: req.params.id }, function(err, documents) {
        if (err) {
            res.status(500).json({ error: 'Error fetching documents' });
        } else {
            res.json(documents);
        }
    });
});

// Express route to fetch all dealerships
app.get('/fetchDealers', function(req, res) {
    Dealerships.find(function(err, documents) {
        if (err) {
            res.status(500).json({ error: 'Error fetching documents' });
        } else {
            res.json(documents);
        }
    });
});

// Express route to fetch dealers by state
app.get('/fetchDealers/:state
