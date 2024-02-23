const companyEmployees = {
    companyInfo: {
        companyName: 'XYZ Corporation',
        location: 'Cityville',
        foundingYear: 2000,
    },
    employees: {
        johnDoe: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            position: 'Software Engineer',
            salary: 80000,
        },
        janeSmith: {
            firstName: 'Jane',
            lastName: 'Smith',
            age: 28,
            position: 'Marketing Specialist',
            salary: 60000,
        },
        bobJohnson: {
            firstName: 'Bob',
            lastName: 'Johnson',
            age: 35,
            position: 'HR Manager',
            salary: 75000,
        },
        // Add more employee data as needed
    },
};

// Example usage:
console.log(companyEmployees.companyInfo.companyName);
console.log(companyEmployees.employees.johnDoe.firstName);
console.log(companyEmployees.employees.bobJohnson.salary);
