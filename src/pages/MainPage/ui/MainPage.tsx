import { useEffect, useState } from "react"
import { Input } from "shared/ui/Input/Input"

const MainPage = ()  => {

    const [value, setValue] = useState('')
    const onChange = (value: string) =>{
        setValue(value)
    }

    return (
        <div>
            Main Page
            <Input value={value} onChange={onChange}/>
        </div>
    )
}

export default MainPage