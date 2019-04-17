const express = require('express');
const router = express.Router();

const MainController = require('../controllers/index');
const UsersController = require('../controllers/users');
const PartyController = require('../controllers/parties');

router.get('/health-check', MainController.healthCheck);
router.get('/reset-all', MainController.recreateDbs);

router.get('/users', UsersController.index);
router.post('/users', UsersController.create);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.delete);
//
router.get('/parties', PartyController.index);
router.post('/parties', PartyController.create);
router.put('/parties/:id', PartyController.update);
router.delete('/parties/:id', PartyController.delete);

module.exports = router;