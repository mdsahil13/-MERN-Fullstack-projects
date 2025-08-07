const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');


router.post('/', async (req, res) => {
    try {
        const { name, message } = req.body;
        const newFeedback = new Feedback({ name, message });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
