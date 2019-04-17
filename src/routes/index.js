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

router.get('/parties', PartyController.index);
router.post('/parties', PartyController.create);
router.put('/parties/:id', PartyController.update);
router.delete('/parties/:id', PartyController.delete);

router.get('/parties/users', PartyController.users);
router.post('/parties/users', PartyController.addUser);
// router.put('/parties/users/:id', PartyController.modifyUser);
router.delete('/parties/users/:id', PartyController.removeUser);

module.exports = router;