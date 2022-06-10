const URL_API = 'https://62a124397b9345bcbe46edcd.mockapi.io/shippify'


const getDrivers = async () => {
    try{
        const response = await fetch(`${URL_API}/driver`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.json()
    }catch {
        return 'There is an error getting the drivers';
    }
}

const getVehiclesByDriver = async () => {
    try{
        const response = await fetch(`${URL_API}/vehicle`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.json();
    }catch {
        return 'There is an error getting the vehicles';
    }
}

const getVehicleById = async (id) => {
    try{
        const response = await fetch(`${URL_API}/vehicle/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.json();
    }catch {
        return 'There is an error getting the vehicle';
    }
}

const createVehicle = async (vehicle) => {
    try {
        const response = await fetch(`${URL_API}/vehicle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(vehicle)
        });
        return response;
    } catch {
        return 'There is an error creating the vehicle';
    }
}

const updateVehicle = async (id, vehicle) => {
    try {
        const response = await fetch(`${URL_API}/vehicle/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(vehicle)
        });
        return response;
    } catch {
        return 'There is an error updating the vehicle';
    }
}

const deleteVehicle = async (id) => {
    try{
        const response = await fetch(`${URL_API}/vehicle/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response;
    }catch {
        return 'There is an error deleting a vehicle';
    }
}

export {
    getDrivers,
    getVehicleById,
    getVehiclesByDriver,
    createVehicle,
    updateVehicle,
    deleteVehicle
}
