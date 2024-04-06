import {createSlice} from'@reduxjs/toolkit';

const initialState={
        currentUser:null,
        loading:false,
        error:null
    }

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        signinstart:(state)=>{
            state.loading=true;
        },
        signinsuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signinfailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        signOutStart:(state)=>{
            state.loading=true;
        },
        signOutSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        },
        signOutFailure:(state,action)=>{
            state.error = action.payload;
        },
        updateUserStart:(state)=>{
            state.loading=true;
        },
        updateUserSuccess:(state,action) =>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        updateUserFailure:(state,action)=>{
            state.error=action.payload;
        }
    }
})

export const {signinstart,signinsuccess,signinfailure,signOutStart,signOutSuccess,signOutFailure,updateUserFailure,updateUserStart,updateUserSuccess}=userSlice.actions;

export default userSlice.reducer;