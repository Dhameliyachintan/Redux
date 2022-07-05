
import { BASE_URL } from "../../Share/baseurl";
import * as ActionType from "../ActionType"


export const Medicinedata = () => (dispatch) => {
    try {
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
        // .catch(error => dispatch(medicinesFailed(error.message)));

    } catch (error) {
        console.log(error);
    }
}