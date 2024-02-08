const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Test route' });
});

const testController = require('../controllers/testController');

routes.get('/test', testController.test);

routes.post('/add', testController.add);

routes.delete('/delete', testController.delete);

module.exports = routes;