export class EmployeeResult {
    status: string;
    data: Array<Employee>;
}

export class Employee {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
}