const employeeList = [
  {
    id: 1,
    name: "Pavithra",
    dep: "Sales",
    salary: 50000,
    bonusPercentage: 10,
    yearsOfExp: 1,
  },
  {
    id: 2,
    name: "Vivega",
    dep: "HR",
    salary: 40000,
    bonusPercentage: 20,
    yearsOfExp: 2,
  },
  {
    id: 3,
    name: "Rani",
    dep: "Engineering",
    salary: 55000,
    bonusPercentage: 10,
    yearsOfExp: 2,
  },
  {
    id: 2,
    name: "Shanmugam",
    dep: "HR",
    salary: 40000,
    bonusPercentage: 20,
    yearsOfExp: 3,
  },
];

const chosenDepartment = "Engineering";
function removeDuplicates() {
  const uniqueEmployeeSet = new Set();
  const uniqueEmployeeList = [];

  for (const employee of employeeList) {
    if (!uniqueEmployeeSet.has(employee.id)) {
      uniqueEmployeeSet.add(employee.id);
      uniqueEmployeeList.push(employee);
    }
  }
  return uniqueEmployeeList;
}

function filterEmployee(uniqueEmployeeList) {
  return uniqueEmployeeList.filter((employee) =>
    chosenDepartment.includes(employee.dep)
  );
}

function calculateTotalCompensation(uniqueEmployeeList) {
  for (let employee of uniqueEmployeeList) {
    if (employee.dep == "HR" && employee.salary < 50000) {
      employee.bonusPercentage += 10;
    } 
    if (employee.dep == "Engineering" && employee.yearsOfExp < 2) {
      employee.bonusPercentage += 10;
    } else {
      employee.bonus = employee.bonusPercentage;
    }
    if (employee.dep == "Sales") {
      if (employee.salary < 100000) {
        employee.bonusPercentage += 5;
      } else if (employee.salary <= 100000 && employee.salary > 500000) {
        employee.bonusPercentage += 10;
      } else {
        employee.bonusPercentage += 20;
      }
    }
    employee.bonus = employee.salary * (employee.bonusPercentage / 100);
    employee.totalCompensation = employee.salary + employee.bonus;
  }

  return uniqueEmployeeList;
}

function displayGroupByDepartment(totalCompensation) {
  const compensationList = {};
  for (const employee of totalCompensation) {
    if (!compensationList[employee.dep]) {
      compensationList[employee.dep] = [];
    }
    compensationList[employee.dep].push({
      id: employee.id,
      name: employee.name,
      salary: employee.salary,
      bonus: employee.bonus,
      totalCompensation: employee.totalCompensation,
    });
  }

  return compensationList;
}

function generateReport() {
  const uniqueEmployeeList = removeDuplicates();
  console.log(uniqueEmployeeList);
  const filterEmployeeList = filterEmployee(uniqueEmployeeList);
  console.log(filterEmployeeList);
  const totalCompensation = calculateTotalCompensation(uniqueEmployeeList);
  console.log(totalCompensation);
  const finalReport = displayGroupByDepartment(totalCompensation);
  console.log(finalReport);
}

generateReport();