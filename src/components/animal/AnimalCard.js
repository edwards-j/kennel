import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./dog.png"
import "./Animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={dog} className="icon--dog" alt="dog icon"/>
                        {this.props.animal.name}
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</button>
                        {/* <Link href=""
                            onClick={()=> this.props.history.push(`/animals/edit/${this.props.animal.id}`)}
                            className="card-link">Edit</Link> */}
                            <Link className="nav-link" to={`/animals/edit/${this.props.animal.id}`}>edit</Link>
                    </div>
                </div>
            </div>
        )
    }
}