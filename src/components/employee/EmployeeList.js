import React, { Component } from "react"
// import person from "./person.png"
// import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/employees/new")}
                            className="btn btn-success">
                        Add New Employee
                    </button>
                </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                <img className="icon--employee" />
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted text-center">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}