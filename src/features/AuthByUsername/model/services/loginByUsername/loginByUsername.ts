import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

enum LoginError {
    INCORRECT_DATA = 'incorect data',
    SERVER_ERROR = "server error"
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps,ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', authData);
            
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            // thunkAPI.extra.navigate('/profile')
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);