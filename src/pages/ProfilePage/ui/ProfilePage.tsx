import { profileReducer } from 'entities/Profile';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                PROFILE PAGE
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;