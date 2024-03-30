import { useSelector } from "react-redux";
import { getProfileData } from "../selectors/getProfileData/getProfileData";
import { getProfileError } from "../selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../selectors/getProfileIsLoading/getProfileIsLoading";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

export const ProfileCard = () => {

    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)


    return (
        <div>
            <div className="header">
                <h1>PROFILE CARD</h1>
                <Button>EDIT</Button>
            </div>
            <div>
                <Input value={data?.first} placeholder="name"/>
                <Input value={data?.lastname} placeholder="name"/>
                <Input value={data?.username} placeholder="name"/>
                <Input value={data?.age} placeholder="name"/>
                <div><img src={data?.avatar} alt="user avatar" /></div>

            </div>
        </div>
    );
};

