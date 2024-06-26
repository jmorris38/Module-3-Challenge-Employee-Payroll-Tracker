// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Array to store the employees
  const Employees = [];
  // The let var has a value === text string
  let userInput = "";
  // This loop collects employee data until the user chooses to stop
  while (userInput !== false) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    let salary = prompt("Enter salary:");
    // Check if the entered salary is a valid number; if not, default to 0
    salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);
    // Prompt the user to confirm if they want to add another employee
    userInput = confirm("Do you want to add another employee?");

    // Create an object to store the employee's first name, last name, and salary
    const myData = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    // The push method appends values to an array
    Employees.push(myData);
  }
  // Returns an array of employees
  return Employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  // Calculate the total salary by iterating over the employeesArray and summing up their salaries
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseFloat(employeesArray[i].salary);
  }
  // This variable takes a value of the average salary, and then divides the total salary by the length of the array.
  const averageSalary = totalSalary / employeesArray.length;
  // Display the average employee salary with the total number of employees
  console.log(
    `The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`
  );
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Selecting a random employee from the employeesArray by generating a random index within the array length
  const randomEmployee = employeesArray[(Math.floor(Math.random() * employeesArray.length))];
  // Logging a congratulatory message to the console with the first name and last name of the randomly selected employee
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
