const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAllAnimals: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    removeAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => fetch(`${remoteURL}/animals`))
                .then(e => e.json())
        }
    },
    addAnimal: {
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(e => e.json())
        }
    },
    getAllLocations: {
        value: function () {
            return fetch(`${remoteURL}/locations`).then(e => e.json())
        }
    },
    getEmployee: {
        value: function (id) {
            return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
        }
    },
    getAllEmployees: {
        value: function () {
            return fetch(`${remoteURL}/employees`).then(e => e.json())
        }
    },
    addEmployee: {
        value: function (newEmployee) {
            return fetch(`${remoteURL}/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            }).then(e => e.json())
        }
    },
    getOwner: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
        }
    },
    getAllOwners: {
        value: function () {
            return fetch(`${remoteURL}/owners`).then(e => e.json())
        }
    },
    addOwner: {
        value: function (newOwner) {
            return fetch(`${remoteURL}/owners`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOwner)
            }).then(e => e.json())
        }
    },
})