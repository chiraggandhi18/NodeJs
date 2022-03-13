var express = require('express');
var router = express.Router();
const utils = require('../utilities/utils');
const employeeController = require('../controllers/employeeController');


router.get('/',  utils.validateApiKey,employeeController.getAllemployee);
router.get('/:id', utils.validateApiKey,employeeController.getEmployeeById);
router.post('/',utils.validateApiKey, employeeController.addNewEmployee);
router.delete('/:id',utils.validateApiKey, employeeController.deleteEmployeeById);
router.put('/:id', utils.validateApiKey,employeeController.updateEmployeeDetailsById);

module.exports = router;