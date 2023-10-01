let employee = { name:"Juan z", streetAddress: "8000 cedros ave",};
function updateEmployeeWithKeyAndValue(employee, name,  streetAddress,) {let newEmployee ={...employee};
 newEmployee[name]= streetAddress; return newEmployee;}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress,) {employee[name] = streetAddress;
    return employee};

    function deleteFromEmployeeByKey(employee, name,) {let newEmployee = {...employee}; 
    delete newEmployee[name]; return newEmployee};

    
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee};


    
        
