import { createAsyncThunk } from "@reduxjs/toolkit"
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";

enum LoginError {
    INCORRECT_DATA = 'incorect data',
    SERVER_ERROR = "server error"
}

export const fetchProfileData = createAsyncThunk<Profile, void,ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_,thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile');
            
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);