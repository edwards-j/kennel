import React, { Component } from 'react';

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Add New Owner
                </button>
                </div>
                <section className="text-center">
                    <h4>Owners</h4>
                    {
                        this.props.owners.map(owners =>
                            <div key={owners.id} className="border m-2 p-1">
                                <p>{owners.name}</p>
                                <button className="btn btn-danger" onClick={() => this.props.removeOwner(owners.id)}>Remove Owner</button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}