import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: "",
        name: ""
    },
    userAppointments:{}
}

export const sliceUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state,action) => {
             const { id, name } = action.payload;
            state.user.id = id;
            state.user.name = name
        },
        getAppointments: (state,action) => {
            state.userAppointments = action.payload
        }
    }
})

export const {login,getAppointments} = sliceUser.actions

export const selectUserId = (state) => state.user.id
export const selectUserName = (state) => state.user.name