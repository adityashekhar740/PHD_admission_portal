import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducers from './User/UserSlice';
// import {persistedReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
const rootReducer=combineReducers({user:userReducers})

const persistConfig={
    key:'root',
    storage,
    version:1
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
})

// export const  store = configureStore({
//     reducer:persistedReducer,
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
//         serializableCheck:false,
//     }),
// })

export const persistor=persistStore(store);