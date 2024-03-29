import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    isLoading: false,
    data: undefined,
    error: false,
    readOnly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setprofileData: (state, action: PayloadAction<Profile>) => {
            
        },

    },
})

export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice