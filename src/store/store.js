import { configureStore } from "@reduxjs/toolkit";
import { AuthState } from './AuthState';

export default configureStore({
    reducer: {
        AuthState
    }
})