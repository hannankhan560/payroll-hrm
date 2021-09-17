import React from 'react'
import Employee from './Employee'

const EmployeesList = ({employees}) => {
    return (
        <>
            <h1>Employees</h1>
            <table className="employee-table">
            <thead>
                <tr className="employees-header">
                    <th>id</th>
                    <th>full name</th>
                    <th>designation</th>
                    <th>cnic</th>
                    <th>dob</th>
                    <th>email</th>
                    <th>department</th>
                    <th>join Date</th>
                    <th>end Date</th>
                    <th>current Status</th>
                    <th>basic Salary</th>
                    <th>incentive</th>
                    <th>bonus</th>
                    <th>paid Allowed Leaves</th>
                    <th>Total Leaves</th>
                    <th>annual Increment</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                
                    <Employee 
                    key={employee.id} 
                    id={employee.id} 
                    name={employee.name} 
                    designation={employee.designation} 
                    cnic = {employee.cnic}
                    dob = {employee.dob}
                    email = {employee.email}
                    department = {employee.department}
                    joinDate = {employee.joinDate}
                    endDate = {employee.endDate}
                    currentStatus = {employee.currentStatus}
                    basicSalary = {employee.basicSalary}
                    incentive = {employee.incentive}
                    bonus = {employee.bonus}
                    paidAllowedLeaves = {employee.paidAllowedLeaves}
                    totalLeaves = {employee.totalLeaves}
                    annualIncrement = {employee.annualIncrement}
                    employees = {employee}
                    />
                
                ))}
            </tbody>
            </table>
        </>
    )
}

export default EmployeesList
