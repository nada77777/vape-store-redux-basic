import { createSlice, current } from "@reduxjs/toolkit";

export const cartItem = createSlice({
    name: 'cartItem',
    initialState: [],
    reducers: {
        insertItem(state, action){
            // console.log(current(state), action);
            // const newItems = state.push(action.payload);
            // // console.log(typeof(newItems));
            // return newItems;
            // state.push(action.payload);
            // console.log(current(state));
      
            // const itemIndex = item.id;
            // state[itemIndex] = item;
            // console.log(typeof(item));

            // if(state.indexOf(8) !== null){
            //     console.log('true')
            // }
            const item = action.payload;
            const itemIndex = item.id;

            if(state[itemIndex]){
                state[itemIndex].count++;
                return;
            }

            const newItem = {
                id: item.id,
                title: item.title,
                company: item.company,
                strong: item.strong,
                size: item.size,
                info: item.info,
                tag: item.tag,
                count: 1,
            };
            state[itemIndex] = newItem;
        },

        plusCount(state, action){
            console.log(action.payload);
            console.log(current(state));
            const item = action.payload;
            const itemIndex = item.id;
            state[itemIndex].count++;
        },

        deleteItem(state, action){
            console.log('sss');
            const item = action.payload;
            return state.filter(selected => selected.id !== item.id);
        },
    }
});