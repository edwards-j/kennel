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
                            <button onClick={() => this.props.removeOwner(owners.id)}>Remove Owner</button>
                        </div>
                    )
                }
            </section>
        )
    }
}