import React, { Component } from 'react';

export default class OwnerList extends Component {
    render() {
        return (
            <section>
                <h4>Owners</h4>
                {
                    this.props.owners.map(owners =>
                        <div key={owners.id}>
                            {owners.name}
                        </div>
                    )
                }
            </section>
        )
    }
}