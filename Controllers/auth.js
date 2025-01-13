const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Sign Up function
async function signUp(req, res) {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

// Sign In function
async function signIn(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in', error });
    }
}

// Logout function 
async function logout(req, res) {
    try {
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out', error });
    }
}

module.exports = { signUp, signIn, logout };
