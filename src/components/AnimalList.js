import React, { Component } from 'react'

export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            <h3>Animals</h3>
            {
                this.props.animals.map(animal =>
                <div key={animal.id}>
                    {animal.name}
                </div>
                )
            }
            </section>
        )
    }
}