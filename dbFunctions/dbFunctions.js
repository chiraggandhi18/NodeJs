const employee = require('../mongo/Employee');
exports.getAllemployeeDbQuery = (req, query, callback) => {
  var userProjection={
    __V: false,
    _id : false
  };
  employee.find(query, userProjection,(error, dbResponse) => {
    
    if (error) {
      return callback(error);
    } else {
      console.log(dbResponse);
      
        
      
      if (dbResponse.length === 0) {
        return callback(error);
      } else {
        return callback(null, dbResponse);
      }
    }
  });
};
// creating a global array of object to handle error codes
exports.getEmployeeByIdDbQuery = (req, query, callback) => {
  employee.find(query, (error, dbResponse) => {
    if (error) {
      return callback({'errorCode' : 500, 'errorMsg' : 'Internal Server Error'});
    } else {
      console.log(dbResponse);
      
      if (dbResponse.length === 0) {
        return callback({'errorCode':404,'errorMsg':'No Data found'});
      } else {
        return callback(null, dbResponse);
      }
    }
  });
};

exports.addNewEmployeeDbQuery = (req, newEmployee, callback) => {
  // error codes
  employee.create(newEmployee, (err, dbResponse) => {
    if (err) {
      callback(error);
    } else {
      callback(null, dbResponse);
    }
  });
};

exports.updateEmployeeByIdDbQuery = (req, query, newEmployeeObj, callback) => {
  employee.findOneAndUpdate(query, newEmployeeObj, (error, dbResponse) => {
    if (error) {
      console.log('error occurred while querying mongodb =>' + error);
      callback(error);
    } else {
      if (dbResponse === null) {
        callback({ errCode: 404 }); 
      } else {
        console.log(dbResponse);
        callback(dbResponse); 
      }
    }
  });
};

exports.deleteEmployeeByIdDbQuery = (req, query, callback) =>{
	employee.deleteOne(query,(error, response)=>{
		if(error)
		{
			callback(error);
		}
		else
		{
			callback(response);
		}
	});
}