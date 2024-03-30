import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProfileData())
        
    },[dispatch])
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                PROFILE PAGE
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;