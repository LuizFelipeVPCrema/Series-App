import { auth, database } from "../firebase/firebaseApp";
import { ref, onValue } from "firebase/database";

export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
    type: SET_SERIES,
    series,
})

export const watchSeries = () => {
    return async dispatch => {
        const user = auth.currentUser;
        const seriesRef = ref(database, `/users/${user.uid}/series`);
        return await onValue(seriesRef, (snapshot) => {
            const series = snapshot.val();
            dispatch(setSeries(series));        
        });
    }
}
