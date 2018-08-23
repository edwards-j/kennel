import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./LocationList"
import OwnerList from "./ownerList"
import AnimalList from "./AnimalList"
import "./Kennel.css"

export default class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Black Lab" },
        { id: 2, name: "Goldendoodle" },
        { id: 3, name: "Beagle" },
        { id: 4, name: "Australian Shepherd" },
        { id: 5, name: "Daschund" },
        { id: 6, name: "Cat" }
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <OwnerList owners={this.state.owners} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}