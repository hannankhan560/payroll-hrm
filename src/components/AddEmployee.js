import { useState } from 'react'

const AddEmployee = ({ onAddEmployee }) => {
    const [name, setName] = useState('')
    const [cnic, setCnic] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [joinDate, setJoinDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [currentStatus, setCurrentStatus] = useState('')
    const [basicSalary, setBasicSalary] = useState('')
    const [incentive, setIncentive] = useState('')
    const [bonus, setBonus] = useState('')
    const [paidAllowedLeaves, setPaidAllowedLeaves] = useState('')
    const [unPaidAllowedLeaves, setUnPaidAllowedLeaves] = useState('')
    const [annualIncrement, setAnnualIncrement] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('plz add employee')
            return
        }
        onAddEmployee({name, cnic, dob, email, designation, department, joinDate, endDate, currentStatus, basicSalary, incentive, bonus, paidAllowedLeaves, unPaidAllowedLeaves, annualIncrement})

        setName('')
        setCnic('')
        setDob('')
        setEmail('')
        setDesignation('')
        setDepartment('')
        setJoinDate('')
        setEndDate('')
        setCurrentStatus('')
        setBasicSalary('')
        setIncentive('')
        setBonus('')
        setPaidAllowedLeaves('')
        setUnPaidAllowedLeaves('')
        setAnnualIncrement('')
    }

    return (
        <>
        <h1>Add Employee</h1>
        <form className="form" onSubmit={onSubmit}>
            {/* <input class="form-control employee-input-field" type="text" placeholder="id"/> */}
            <input className="form-control employee-input-field" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
            <input className="form-control employee-input-field" value={cnic} onChange={(e)=>setCnic(e.target.value)} type="number" placeholder="CNIC"/>
            <input className="form-control employee-input-field" value={dob} onChange={(e)=>setDob(e.target.value)} type="text" placeholder="Date Of Birth"/>
            <input className="form-control employee-input-field" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input className="form-control employee-input-field" value={designation} onChange={(e)=>setDesignation(e.target.value)} type="text" placeholder="Designation"/>
            <input className="form-control employee-input-field" value={department} onChange={(e)=>setDepartment(e.target.value)} type="text" placeholder="Department"/>
            <input className="form-control employee-input-field" value={joinDate} onChange={(e)=>setJoinDate(e.target.value)} type="text" placeholder="Join Date"/>
            <input className="form-control employee-input-field" value={endDate} onChange={(e)=>setEndDate(e.target.value)} type="text" placeholder="End Date"/>
            <input className="form-control employee-input-field" value={currentStatus} onChange={(e)=>setCurrentStatus(e.target.value)} type="text" placeholder="Current Status"/>
            <input className="form-control employee-input-field" value={basicSalary} onChange={(e)=>setBasicSalary(e.target.value)} type="number" placeholder="Basic Salary"/>
            <input className="form-control employee-input-field" value={incentive} onChange={(e)=>setIncentive(e.target.value)} type="number" placeholder="Incentives"/>
            <input className="form-control employee-input-field" value={bonus} onChange={(e)=>setBonus(e.target.value)} type="number" placeholder="Bonus"/>
            <input className="form-control employee-input-field" value={paidAllowedLeaves} onChange={(e)=>setPaidAllowedLeaves(e.target.value)} type="number" placeholder="Paid Allowed Leaves"/>
            <input className="form-control employee-input-field" value={unPaidAllowedLeaves} onChange={(e)=>setUnPaidAllowedLeaves(e.target.value)} type="number" placeholder="UnPaid Leaves"/>
            <input className="form-control employee-input-field" value={annualIncrement} onChange={(e)=>setAnnualIncrement(e.target.value)} type="number" placeholder="Annual Increment"/>

            <input type="submit" value='Save Task' className="btn btn-center"/>        
        </form>
        </>
    )
}

export default AddEmployee
