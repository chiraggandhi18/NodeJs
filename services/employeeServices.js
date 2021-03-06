const { response } = require('express');
const res = require('express/lib/response');
const { getAllemployee } = require('../controllers/employeeController');
const dbFunctions = require('../dbFunctions/dbFunctions');


exports.getAllemployee = (req, callback) => {
  console.log('employee service');
  const query = {};
  dbFunctions.getAllemployeeDbQuery(req, query, (error, response) => {
    if (error) {
      return callback(error);
    } else {
      return callback(null,response);
    }
  });
};






const mapemployeeResponse = (response) =>{
  return  {
    'name': response[0].Name || '',
    'empId': response[0].empId || '',
    'city': response[0].city || '',
  };
}

exports.getEmployeeById = (req, empId, callback) => {
	console.log('employee service');
	const query = {empId : empId};// todo add projection in mongo query
	dbFunctions.getEmployeeByIdDbQuery(req, query, (error, response) => {
	  if (error) {
		return callback(error);
	  } else {
		return callback(null, mapemployeeResponse(response));
	  }
	});
  };

exports.deleteEmployeeById = (req, empId, callback) => {
console.log('employee service');
const query = {empId : empId};
dbFunctions.deleteEmployeeByIdDbQuery(req, query, (error, response) => {
	if (error) {
	return callback(error);
	} else {
	return callback(null, response);
	}
});
};

exports.addNewEmployee = (req, newEmployee, callback) => {
  dbFunctions.addNewEmployeeDbQuery(req, newEmployee, (error, response) => {
    if (error) {
      return callback(error);
    } else {
      return callback(null, response);
    }
  });
};

exports.updateEmployeeDetailsById = (req, empId,  newEmployeeObj, callback) => {
  const query = { empId: empId };
  dbFunctions.updateEmployeeByIdDbQuery(req, query, newEmployeeObj, (error, response) => {
    if (error) {
      return callback(error);
    } else {
      return callback(null, response);
    }
  });
};