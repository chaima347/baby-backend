const express = require('express');
const { signIn, signUp, logout } = require('../Controllers/auth.js');
const router = express.Router();

// Route for parent (GET request)
router.get('/', (req, res) => {
    res.render('parent');
});

// Route for sign-in (POST request)
router.post('/signIn', signIn);

// Route for sign-up (POST request)
router.post('/signUp', signUp);

// Route for logout (POST request)
router.post('/logout', logout);

// Export the router
module.exports = router;  // Use CommonJS export here
