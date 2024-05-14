import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    userAppointments:{}
}

export const sliceUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        action: (action,state) => {}
    }
})

export const {action} = sliceUser.actions