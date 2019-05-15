// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING_START = 'FETCHING_START'
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
export const FETCH_FAILURE = 'FETCH_FAILURE'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_START })

        axios.get('https://swapi.co/api/people/')
            .then(res => {
                dispatch({
                    type: FETCH_SUCCESSFUL,
                    data: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_FAILURE,
                    err: err
                })

            })
    }
}

