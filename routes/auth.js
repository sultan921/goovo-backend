const router = require("express").Router();
const User = require("../models/User");

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        
        let existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ error: "Phone number already registered!" });
        }

        const newUser = new User({ name, phone, password });
        await newUser.save();
        
        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ phone, password });

        if (!user) {
            return res.status(400).json({ error: "Invalid phone number or password!" });
        }

        res.json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;