 import { configureStore } from "@reduxjs/toolkit";
 import habitReducer from "../features/habitSlice";
 import userReducer from "../features/user/userSlice";


 export const makeStore = () => {
    return configureStore({
        reducer: {
            habits: habitReducer,
            user: userReducer
        },
    });
 };

 export type AppStore = ReturnType<typeof makeStore>;
 export type AppDispatch = AppStore["dispatch"];
 export type RootState = ReturnType<AppStore["getState"]>;

