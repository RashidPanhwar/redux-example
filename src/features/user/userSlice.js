import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "Hey! Iam Rashid Ali And You are Getting Data Through Redux"
}

const userSlice = createSlice({name: 'user', initialState, reducers : {

}})

export default userSlice.reducer