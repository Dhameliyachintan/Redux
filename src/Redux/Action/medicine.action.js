
import { BASE_URL } from "../../Share/baseurl";
import * as ActionType from "../ActionType"


export const Medicinedata = () => (dispatch) => {
    try {
        dispatch(loadingmedicine())
        setTimeout(function () {
            fetch(BASE_URL + "doctr")
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


export const loadingmedicine = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_MEDICINES })
}

export const errormedicines = (error) => (dispatch) => {
    dispatch({ type: ActionType.MEDICINES_ERROES, payload: error })
} 