import { UPDATE_PROFILE } from "./profile.actionTypes";

export const updateProfile = userProfile => ({
    type: UPDATE_PROFILE,
    payload: userProfile
})
