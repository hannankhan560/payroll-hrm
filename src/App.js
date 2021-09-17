import './App.css';
import { Component, useState} from 'react'
import Header from './components/layout/Header';
import AddEmployee from './components/employees/AddEmployee';
// import EmployeesList from './components/employees/EmployeesList';
// import Payroll from './components/payroll/Payroll';
// import axios from './axios-orders'
import firebase from './firebase';


class App extends Component {
  state = {
    employees: [],
    loading: false
    
  }

  componentDidMount(){
    // axios.get('https://payroll-hrm-a0643-default-rtdb.firebaseio.com/employees.json')
    // .then(response => {
    //   this.setState({employees: [response.data]})
    //   console.log(this.state.employees)
    // })

    
  }


  render (){
  const ref = firebase.firestore().collection('employees');
    console.log('firebase')
    console.log(ref);

    let loading = this.state.loading?"<h1>Loading.....</h1>": ""; 
    return (
      <div className="App">
      <Header />
        {loading}
      <div className="container">
        <AddEmployee />
        {/* {employeedata} */}
        {/* {employee} */}
      </div>
    </div>
    )
  }
}




/*
const App = () => {
//   const [employees, setEmployees] = useState([
//     {
//         id: 1,
//         name: 'Hannan Ahmad Khan' ,
//         cnic: '3740538000404' ,
//         dob: '07-11-1997' ,
//         email: 'hannan.khan.560@gmail.com' ,
//         designation: 'Front End Web Developer' ,
//         department: 'IT' ,
//         joinDate: 'August 1st, 2021' ,
//         endDate: '' ,
//         currentStatus: 'Active' ,
//         basicSalary: '100000' ,
//         incentive: '2000' ,
//         bonus: '5000' ,
//         paidAllowedLeaves: '24' ,
//         totalLeaves: '30' ,
//         annualIncrement: '30000' ,
        
//     },
//     {
//       id: 2,
//       name: 'Araib Rajpoot' ,
//       cnic: '3740538000404' ,
//       dob: '04-04-1992' ,
//       email: 'araib@gmail.com' ,
//       designation: 'Wordpress Developer' ,
//       department: 'IT' ,
//       joinDate: 'August 1st, 2021' ,
//       endDate: '' ,
//       currentStatus: 'Active' ,
//       basicSalary: '100000' ,
//       incentive: '2000' ,
//       bonus: '5000' ,
//       paidAllowedLeaves: '24' ,
//       totalLeaves: '10' ,
//       annualIncrement: '60000' ,
      
//   }
// ])
// const employee = {
//   id: 1,
//   name: 'Hannan Ahmad Khan' ,
//   cnic: '3740538000404' ,
//   dob: '07-11-1997' ,
//   email: 'hannan.khan.560@gmail.com' ,
//   designation: 'Front End Web Developer' ,
//   department: 'IT' ,
//   joinDate: 'August 1st, 2021' ,
//   endDate: '' ,
//   currentStatus: 'Active' ,
//   basicSalary: '100000' ,
//   incentive: '2000' ,
//   bonus: '5000' ,
//   paidAllowedLeaves: '24' ,
//   totalLeaves: '30' ,
//   annualIncrement: '30000' ,
  
// }
const [employees, setEmployees] = useState([])

const [employeeget, setEmployeeget] = useState([])

// let dumdata = ''

// axios.get('https://payroll-hrm-a0643-default-rtdb.firebaseio.com/employees.json')
// .then(response => 
//   setEmployeeget(response.data),
//   // dumdata = [response.data],
//   // dumdata.map((el)=> {
//   //   // setEmployees([...employees + el])
//     console.log(employeeget)
//   // }),
//   )
//   .catch(error=> console.log(error));
  
  // console.log(dumdata)


// axios.post('/employees.json', employee)
// .then(response => console.log(response.config.data))
// .catch(error=> console.log(error));

// useEffect(() => {
//   // effect
//   // return () => {
//   //   cleanup
//   // }
//   db.collection('employees').onSnapshot(snapshot => {
//     console.log(snapshot.docs.map(doc => doc.data().employee));
//     setEmployees(snapshot.docs.map(doc => doc.data().employee))
//   })
// }, [input])


const addEmployee = (employee) => {
  const id = employees.length+1;
  const newEmployee = {id, ...employee}
  setEmployees([...employees, newEmployee])
}
let employeedata = "";
// if ({employees}) {
//   employeedata = (
//   <>
//   <EmployeesList employees={employees}/>
//   <Payroll employees={employees} />
//   </>
//   )}
  return (
    <div className="App">
      <Header />
       <div className="container">
        <AddEmployee onAddEmployee={addEmployee}/>
        {employeedata}
      </div> 
    </div>
  );
}
*/
export default App;
