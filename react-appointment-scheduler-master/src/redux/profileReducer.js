import { UPDATE_PROFILE } from "./../routes/profileUpdate/profile.actionTypes"
const initialState = {
    name: "Vaishnavi",
    prifileUrl: ""
};

const profileReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case UPDATE_PROFILE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default profileReducer;
