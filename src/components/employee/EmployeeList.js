import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add New Employee
                    </button>
                </div>
                <section className="employees">
                    <h4>Employees</h4>
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="border m-2 p-2 rounded">
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <button className="btn btn-danger" onClick={() => this.props.fireEmployee(employee.id)}>You're Fired</button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList