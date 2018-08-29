// import React, { Component } from "react"
// // import person from "./person.png"
// // import "./Employee.css"
// import AnimalCard from "../animal/AnimalCard"
// import EmployeeCard from './EmployeeCard'


// export default class EmployeeList extends Component {
//     render() {
//         const animals = this.props.animals
//         return (
//             <React.Fragment>
//                 <div className="animalButton">
//                     <button type="button"
//                         onClick={() => this.props.history.push("/employees/new")}
//                         className="btn btn-success">
//                         Add New Employee
//                     </button>
//                 </div>
//                 <div>
//                     {
//                         this.props.employees.map((employee) => {
//                             <EmployeeCard key={employee.id} employee={employee} animals={animals} {...this.props} />
//                         })
//                     }
//                 </div>
//             </React.Fragment>
//         )
//     }
// }



// {/* <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id} className="card card--employee">
//                         <div className="card-body">
//                             <h5 className="card-title text-center">
//                                 <img className="icon--employee" alt="employee icon"/>
//                                 {employee.name}
//                             <a href=""
//                                 onClick={() => this.props.deleteEmployee(employee.id)}
//                                 className="card-link">Delete</a>
//                             </h5>

//                             <h6 className="card-subtitle mb-2 text-muted text-center">Caretaker For</h6>
//                             <div className="animals--caretaker">
//                             {
//                                 this.props.animals
//                                     .filter(anml => anml.employeeId === employee.id)
//                                     .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
//                             }
//                             </div>

//                         </div>
//                     </div>
//                 )
//             }
//             </section> */}

import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import EmployeeCard from './EmployeeCard'


export default class EmployeeList extends Component {
    render() {
        const animals = this.props.animals
        return (
            <section className="employees text-center">
            <h2 className="">Employees</h2>
            <button type="button"
                    id="add-employee-btn"
                    className="btn btn-info"
                    onClick={() => {this.props.history.push("/employees/new")}}>
                    Add Employee
            </button>
            <div className="employee-cards">
            {
                this.props.employees.map((employee) =>
                   <EmployeeCard deleteEmployee={this.props.deleteEmployee} key={employee.id} employee={employee} animals={animals} {...this.props}/>
                )
            }
            </div>
            </section>
        )
    }
}