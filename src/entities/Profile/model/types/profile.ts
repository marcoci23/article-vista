export interface Profile {
    "first": string,
    "lastname": string,
    "age": string,
    "username": string,
    "avatar": string
}

export interface ProfileSchema {
    data? : Profile,
    isLoading: boolean,
    error?:string,
    readOnly?: boolean
}