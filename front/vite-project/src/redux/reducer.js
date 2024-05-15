import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    userAppointments:{}
}

export const sliceUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state,action) => {
            state.user = action.payload
        }
    }
})

export const {login} = sliceUser.actions

export const selectUser = (state) => state.user