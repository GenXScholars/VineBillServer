const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const paths = require('./paths/adminPaths');


// to be added for multiple api calls

// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const AdminController = require('../controllers/admin');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');

router.get(paths.getSingleAdmin, AdminController.getById);
router.get(paths.getAllAdmins, AdminController.getAll);
router.post(paths.adminSignUp, AdminController.register);
router.post(paths.adminLogin, AdminController.adminLogin);
router.put(paths.updateAdmin, AdminController.update);
router.delete(paths.deleteAdmin, AdminController.delete);



module.exports = router;