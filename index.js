const db = require('./data/helpers/cars');
const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());

server.get('/api/cars', async (req, res) => {
    try {
        const cars = await db.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: "Couldn't get cars"});
    }
})

server.get('/api/cars/:id', async (req, res) => {
    try {
        const car = await db.findByID(req.params.id);
        res.status(200).json(car);
    } catch (error) {
        res.status(404).json({ error: "Couldn't get car"});
    }
})

server.post('/api/cars', async (req, res) => {
    try {
        const { make, model, mileage, VIN, year } = req.body;
        if (VIN && make && model && mileage) {
            const ids = await db.insert(req.body);
            const car = await db.findByID(ids.id);
            res.status(201).json(car);
        } else {
            res.status(400).json({ error: "VIN, make, model and mileage are all required" });
        }
    } catch (error) {
        res.status(500).json({ error: "Couldn't create car"});
    }
})

server.listen(4000, () => {
    console.log('listenting on port 4000');
})