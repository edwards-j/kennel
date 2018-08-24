import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owner/ownerList"

import "bootstrap/dist/css/bootstrap.min.css"
import "./ApplicationView.css"
import "./animal/Animal.css"


export default class ApplicationViews extends Component {

    deleteAnimal = id => {
        fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }

    fireEmployee = id => {
        //Deletes the employee from the database
        fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        //Gets the updated list of employees
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        //Updates state to match the database
        .then(employees => this.setState({
            employees: employees
        }))
    }

    removeOwner = id => {
        fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations"))
            .then((r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners"))
            .then(r => r.json())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <Route exact path="/" render={() => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={() => {
                        return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={() => {
                        return <EmployeeList fireEmployee={this.fireEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={() => {
                        return <OwnerList removeOwner={this.removeOwner} owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}