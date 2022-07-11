
import { BASE_URL } from "../../Share/baseurl";
import * as ActionType from "../ActionType"


export const Medicinedata = () => (dispatch) => {
    try {
        dispatch(loadingmedicine())
        setTimeout(function () {
            fetch(BASE_URL + "doctor")
                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                    error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                    })
                .then(response => response.json())
                .then(medicines => dispatch(({ type: ActionType.GET_MEDICINES, payload: medicines })))
                .catch(error => dispatch(errormedicines(error.message)));
        }, 2000)

    } catch (error) {
        dispatch(errormedicines(error))
        console.log(error);
    }
}

export const addmedicinedata = (data) => (dispatch) => {
    try {
        dispatch(loadingmedicine())
        setTimeout(function () {
            return fetch(BASE_URL + "doctor", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),

            })

                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                    error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                    })
                .then(response => response.json())
                .then(medicines => dispatch(({ type: ActionType.ADD_MEDICINES, payload: medicines })))
                // .catch(error => dispatch(errormedicines(error.message)));
                .catch((error) => dispatch(errormedicines(error.message)))
        }, 2000)

    } catch (error) {
        dispatch(errormedicines(error.message))
    }
}

// export const updatemedicine = (data) => (dispatch) => {
//     try {
//         fetch(BASE_URL + "doctor" + data.id)
//             .than.then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     var error = new Error('Error ' + response.status + ': ' + response.statusText);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//                 error => {
//                     var errmess = new Error(error.message);
//                     throw errmess;
//                 })
//                 .than(response => response.json())

//     } catch (error) {

//     }
// }

export const Deletemedicine = (id) => (dispatch) => {
    try {
        dispatch(loadingmedicine())
        setTimeout(function () {
            return fetch(BASE_URL + "doctor/" + id, {
                method: 'Delete', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },

            })

                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                    error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                    })
                .then(response => response.json())
                .then(medicines => dispatch(({ type: ActionType.REMOVE_MEDICINES, payload: id })))
                // .catch(error => dispatch(errormedicines(error.message)));
                .catch((error) => dispatch(errormedicines(error.message)))
        }, 2000)

    } catch (error) {
        dispatch(errormedicines(error.message))
    }
    // dispatch({type: ActionType.REMOVE_MEDICINES, id : id})
}



export const loadingmedicine = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_MEDICINES })
}

export const errormedicines = (error) => (dispatch) => {
    dispatch({ type: ActionType.MEDICINES_ERROES, payload: error })
} 