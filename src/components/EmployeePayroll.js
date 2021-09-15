import React from 'react'

const EmployeePayroll = ({employees, id, name, cnic, dob, email, designation, department, joinDate, endDate, currentStatus, basicSalary, incentive, bonus, paidAllowedLeaves, totalLeaves, annualIncrement}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{designation}</td>
            <td>{department}</td>
            <td>{currentStatus}</td>
            <td>{basicSalary}</td>
            <td>{incentive}</td>
            <td>{bonus}</td>
            <td>{paidAllowedLeaves}</td>
            <td>{totalLeaves}</td>
            <td>{annualIncrement}</td>
            <td>{totalLeaves>paidAllowedLeaves?(basicSalary/30)*(totalLeaves-paidAllowedLeaves):0}</td>
            <td>{parseInt(basicSalary) + parseInt(incentive) + parseInt(bonus) - (totalLeaves>paidAllowedLeaves?(basicSalary/30)*(totalLeaves-paidAllowedLeaves):0)}</td>
        </tr>
    )
}

export default EmployeePayroll
