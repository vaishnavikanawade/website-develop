import { UPDATE_PROFILE } from "./welprofileaction";

export const updateProfile = userProfile => ({
    type: UPDATE_PROFILE,
    payload: userProfile
})
