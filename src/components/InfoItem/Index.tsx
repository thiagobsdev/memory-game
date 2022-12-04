
import * as C from "./Style"


type Props = {
    label: string;
    value: string;
}

export function InfoItem( { label, value} : Props) {

    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>   
        </C.Container>
    )
}
  
 
    