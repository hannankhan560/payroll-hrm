import React from 'react'

const Employee = ({employees, id, name, cnic, dob, email, designation, department, joinDate, endDate, currentStatus, basicSalary, incentive, bonus, paidAllowedLeaves, totalLeaves, annualIncrement}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{designation}</td>
            <td>{cnic}</td>
            <td>{dob}</td>
            <td>{email}</td>
            <td>{department}</td>
            <td>{joinDate}</td>
            <td>{endDate}</td>
            <td>{currentStatus}</td>
            <td>{basicSalary}</td>
            <td>{incentive}</td>
            <td>{bonus}</td>
            <td>{paidAllowedLeaves}</td>
            <td>{totalLeaves}</td>
            <td>{annualIncrement}</td>
        </tr>
    )
}

export default Employee
