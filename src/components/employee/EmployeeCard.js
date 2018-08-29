import React from "react"
import PropTypes from "prop-types"
import AnimalCard from "../animal/AnimalCard"



const EmployeeCard = ({ employee, animals, deleteEmployee }) => {
    return (
        <section className="employees">
            {
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                {/* <img className="icon--employee" alt="employee icon" /> */}
                                {employee.name}
                                <button 
                                    onClick={() => deleteEmployee(employee.id)}
                                    className="card-link">Delete</button>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center">Caretaker For</h6>
                            <div className="animals--caretaker">
                                {
                                    animals
                                        .filter(anml => anml.employeeId === employee.id)
                                        .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                                }
                            </div>

                        </div>
                    </div>
                
            }
        </section>
    )
}

EmployeeCard.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    employee: PropTypes.object
}

export default EmployeeCard