 import { configureStore } from "@reduxjs/toolkit";
 import habitReducer from "../features/habitSlice";

 export const makeStore = () => {
    return configureStore({
        reducer: {
            habits: habitReducer,
        },
    });
 };

 export type AppStore = ReturnType<typeof makeStore>;
 export type AppDispatch = AppStore["dispatch"];
 export type RootState = ReturnType<AppStore["getState"]>;

