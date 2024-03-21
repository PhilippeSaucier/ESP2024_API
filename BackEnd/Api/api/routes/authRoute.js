const route = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');

const authController = require('../controllers/authController');

route.get('/', (req, res) => {
    res.status(200).json({ message: 'Veuillez appeler vos commandes dans /api/...' });
});

route.post('/getAppToken', authController.getAppToken);

route.post('/register', authController.register);

route.post('/login', authController.login);

route.post('/forgotPassword', authController.forgotPassword);

module.exports = route;