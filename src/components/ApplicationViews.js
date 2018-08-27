import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owner/ownerList"
import dataManager from "./modules/dataManager"
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from './Login/Login'


import "bootstrap/dist/css/bootstrap.min.css"
import "./ApplicationView.css"
import "./animal/Animal.css"

export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    deleteAnimal = id => dataManager.removeAnimal(id)
        .then(animals => this.setState({
            animals: animals
        }))

    addAnimal = animal => dataManager.addAnimal(animal)
        .then(() => dataManager.getAllAnimals())
        .then(animals => this.setState({
            animals: animals
        }))

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

    addEmployee = employee => dataManager.addEmployee(employee)
        .then(() => dataManager.getAllEmployees())
        .then(employees => this.setState({
            employees: employees
        }))

    addOwner = owner => dataManager.addOwner(owner)
        .then(() => dataManager.getAllOwners())
        .then(owners => this.setState({
            owners: owners
        }))

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

        dataManager.getAllAnimals()
            .then(animals => newState.animals = animals)
            .then(() => dataManager.getAllEmployees())
            .then(employees => newState.employees = employees)
            .then(() => dataManager.getAllLocations())
            .then(locations => newState.locations = locations)
            .then(() => dataManager.getAllOwners())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <Route path="/login" component={Login} />

                    <Route exact path="/" render={() => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/employees" render={props => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList deleteEmployee={this.deleteEmployee}
                                employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        if (this.isAuthenticated()) {
                        return <OwnerList  {...props}
                            removeOwner={this.removeOwner}
                            owners={this.state.owners} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                        />
                    }} />
                    <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                        />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}