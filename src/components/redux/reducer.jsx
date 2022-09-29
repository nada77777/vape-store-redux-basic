import { createSlice } from "@reduxjs/toolkit";





export const cartItem = createSlice({
    name: 'cartItem',
    initialState: [],
    reducers: 
    {
        addItem(state, action){
            console.log('reducer fn');
        },

        plusCount(state, action){
            console.log('reducer fn');
        },

        minusCount(state, action){
            console.log('reducer fn');
        }
    }
});


