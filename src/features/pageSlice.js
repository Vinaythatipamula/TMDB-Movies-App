import { createSlice } from "@reduxjs/toolkit"

const initialState = { pageNo:1 }

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers : {
        handleInc: (state)=>{
            if(state.pageNo===1){
                state.pageNo = 1
            }
            state.pageNo+=1
        },
        handleDec: (state)=>{
            if(state.pageNo>1){
                state.pageNo -= 1
            }
        }
    }
})

export const { handleDec, handleInc } =
  pageSlice.actions;

export default pageSlice.reducer;