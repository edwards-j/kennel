import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h4>Employees</h4>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                            <button onClick={() => this.props.fireEmployee(employee.id)}>You're Fired</button>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList