import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h4>Locations</h4>
                {
                    this.props.locations.map(locations =>
                        <div key={locations.id}>
                            {locations.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default LocationList