import {configureStore} from "@reduxjs/toolkit"
import {sliceUser} from "./reducer"

const store = configureStore({
    reducer: sliceUser.reducer
})

export default store