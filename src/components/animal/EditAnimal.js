import React, { Component } from "react"
import "./Animal.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {}
    
    componentDidMount() {
        console.log(this.props.animals)
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0))
        this.setState(animal)
        console.log(animal)
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewAnimal = evt => {
        evt.preventDefault()

        const animal = {
            name: this.state.name,
        }

        const animalEditId = parseInt(this.props.match.params.animalId, 0)

        // Create the animal and redirect user to animal list
        this.props.editAnimal(animalEditId, animal)
        .then(() => this.props.history.push("/animals"))
    }


    render() {
        return (
            <React.Fragment>
                <div className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                            className="form-control"
                            defaultValue={this.state.name}
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Animal name" />
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
                </div>
            </React.Fragment>
        )
    }
}