import { UPDATE_PROFILE } from "./../route/updateprofile/welprofileaction"
const initialState = {
    name: "Gayu",
    profileUrl: ""
};

const reducewelcomeprof = (state = initialState, action) => {
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

export default reducewelcomeprof;
