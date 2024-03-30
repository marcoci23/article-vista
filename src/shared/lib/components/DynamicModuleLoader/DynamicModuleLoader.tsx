import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer
}

type ReducersListEntry = [StateSchemaKey,Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers,removeAfterUnmount }) => {

    const store = useStore() as ReduxStoreWithManager


    useEffect(() => {
        Object.entries(reducers).forEach(([name,reducer])=>{
            store.reducerManager.add(name as StateSchemaKey, reducer)
        })
        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name,reducer])=>{
                    store.reducerManager.remove(name as StateSchemaKey)
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;