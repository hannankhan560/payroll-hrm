import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import EmployeesList from './components/EmployeesList';
import Payroll from './components/Payroll';


const App = () => {
  const [employees, setEmployees] = useState([
    {
        id: 1,
        name: 'Hannan Ahmad Khan' ,
        cnic: '3740538000404' ,
        dob: '07-11-1997' ,
        email: 'hannan.khan.560@gmail.com' ,
        designation: 'Front End Web Developer' ,
        department: 'IT' ,
        joinDate: 'August 1st, 2021' ,
        endDate: '' ,
        currentStatus: 'Active' ,
        basicSalary: '100000' ,
        incentive: '2000' ,
        bonus: '5000' ,
        paidAllowedLeaves: '24' ,
        totalLeaves: '30' ,
        annualIncrement: '30000' ,
        
    },
    {
      id: 2,
      name: 'Araib Rajpoot' ,
      cnic: '3740538000404' ,
      dob: '04-04-1992' ,
      email: 'araib@gmail.com' ,
      designation: 'Wordpress Developer' ,
      department: 'IT' ,
      joinDate: 'August 1st, 2021' ,
      endDate: '' ,
      currentStatus: 'Active' ,
      basicSalary: '100000' ,
      incentive: '2000' ,
      bonus: '5000' ,
      paidAllowedLeaves: '24' ,
      totalLeaves: '10' ,
      annualIncrement: '60000' ,
      
  }
])

const addEmployee = (employee) => {
  const id = employees.length+1;
  const newEmployee = {id, ...employee}
  setEmployees([...employees, newEmployee])
}

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddEmployee onAddEmployee={addEmployee}/>
        <EmployeesList employees={employees}/>
        <Payroll employees={employees} />
      </div>
    </div>
  );
}

export default App;
