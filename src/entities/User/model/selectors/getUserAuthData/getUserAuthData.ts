import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { useSelector } from "react-redux";

export const getUserAuthData = (state: StateSchema) => state.user.authData