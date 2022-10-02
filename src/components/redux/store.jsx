import { configureStore } from "@reduxjs/toolkit";
import { cartItem } from "./reducer";

const store = configureStore({
    reducer: {
        cartItem: cartItem.reducer
    }
});

export default store;























// import { configureStore, createSlice, current } from "@reduxjs/toolkit";

// let cartItem = createSlice({
//     name: 'cartItem',
//     initialState: [],
//     reducers: {
//         addCount(state, action) {
//             let item = state.find(element => element.id === action.payload);
//             item.count++;
//         },
//         removeCount(state, action) {
//             let itemIdx = state.findIndex(element => element.id === action.payload);
//             state.splice(itemIdx, 1);
//         },
//         insertItem(state, action) {
//             let item = action.payload;
//             let itemIndex = state.findIndex(element => element.id === item.id);

//             if (itemIndex === -1) {
//                 console.log('ss');
//                 state.push({id: item.id, title: item.title, count: 1});
//                 console.log(current(state));
//                 return;
//             }
//             state[itemIndex].count++;
     
//             console.log('state index :', state.lastIndexOf('sss'),'state :',current(state), 'payload :', action.payload);
//         }
//     }
// });

// export let { addCount, removeCount, insertItem } = cartItem.actions

// export default configureStore({
//     reducer: { 
//         cartItem: cartItem.reducer
//     }
// });