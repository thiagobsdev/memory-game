import { ReactEventHandler } from "react";
import * as C from "./Styles"


type Props = {
    label: string;
    icon?: any;
    onClick: ReactEventHandler<HTMLDivElement>
}

export function Button( { label, icon, onClick} : Props) {

    return (
        <C.Container onClick={onClick}>
            <C.Icon src= {icon}></C.Icon>
            <C.Label>
                {label}
            </C.Label>    
        </C.Container>
    )
}