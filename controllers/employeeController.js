const employeeServices = require('../services/employeeServices');
const utils = require('../utilities/utils');
// add middleware for security headers in app.js
exports.getAllemployee = (req, res, next) => {
  employeeServices.getAllemployee(req, (error, response) => {
    if (error) {
      res.send({ err: error });
    } else {
		
      res.send(response)
    }
  });
};

exports.getEmployeeById = (req, res, next) => {
  const empId = req.params.id;//todo sanitize the values 
  employeeServices.getEmployeeById(req, empId, (error, response) => {
    if (error) {
      utils.FrameAndSendErrorResponse(error, req, res, next);
    } else {
      res.send(response);
    }
  });
};

exports.addNewEmployee = (req, res, next) => {
	//validate the request input parameter and send 400 bad req if input not valid
  const newEmployee = {
    name: req.body.name,
    city: req.body.city,
    empId: req.body.empId,
  };
  console.log(newEmployee);
  employeeServices.addNewEmployee(req, newEmployee, (error, response) => {
    if (error) {
      res.send({ err: error });
    } else {
      res.send( response);
    }
  });
};

exports.deleteEmployeeById = (req, res, next) => {
  const empId = req.params.id;
  employeeServices.deleteEmployeeById(req, empId, (error, response) => {
    if (error) {
      res.send({ err: error });
    } else {
      res.send(response);
    }
  });
};

exports.updateEmployeeDetailsById = (req, res, next) => {
	
	const empId = req.params.id;
	let newEmployeeObj = {};
	if(req.body.Name !== null)
	{
		newEmployeeObj.Name = req.body.Name;
	}
	if(req.body.city !== null)
	{
		newEmployeeObj.city = req.body.city;
	}
	employeeServices.updateEmployeeDetailsById(req, empId, newEmployeeObj, (error, response) => {
	  if (error) {
		res.send({ err: error });
	  } else {
		res.send(response);
	  }
	});
  };