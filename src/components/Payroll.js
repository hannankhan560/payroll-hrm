import React from 'react'
import EmployeePayroll from './EmployeePayroll'

const Payroll = ({employees}) => {
    let grandTotal = 0

    return (
        <>
            <h1>Payroll</h1>
            <table className="employee-table">
                <thead>
                <tr className="employees-header">
                    <th>id</th>
                    <th>full name</th>
                    <th>designation</th>
                    <th>department</th>
                    <th>current Status</th>
                    <th>basic Salary</th>
                    <th>incentive</th>
                    <th>bonus</th>
                    <th>paid Allowed Leaves</th>
                    <th>Total Leaves</th>
                    <th>annual Increment</th>
                    <th>Deductions</th>
                    <th>Total Payable</th>
                </tr>
                </thead>
            <tbody>
                {employees.map((employee)=>(
                    grandTotal = grandTotal + parseInt(employee.basicSalary) + parseInt(employee.incentive) + parseInt(employee.bonus) - (employee.totalLeaves>employee.paidAllowedLeaves?(employee.basicSalary/30)*(employee.totalLeaves-employee.paidAllowedLeaves):0),
                    <EmployeePayroll 
                    key={employee.id} 
                    id={employee.id} 
                    name={employee.name} 
                    designation={employee.designation} 
                    department = {employee.department}
                    currentStatus = {employee.currentStatus}
                    basicSalary = {employee.basicSalary}
                    incentive = {employee.incentive}
                    bonus = {employee.bonus}
                    paidAllowedLeaves = {employee.paidAllowedLeaves}
                    totalLeaves = {employee.totalLeaves}
                    annualIncrement = {employee.annualIncrement}
                    />
                
                ))}
            </tbody>
            </table>
            <h3>Grand Total : {grandTotal}</h3>
        </>
    )
}

export default Payroll
