import * as C from "./Styles"

import { iconsType } from "../../helpers/Types" 
import { GridType } from "../../type/GridType"
import Logo from "../../assets/svgs/b7.svg"

type Props = {
    item: GridType,
    onClick: () => void
}



export function GridItem( { item, onClick}: Props) {
    return (
        <C.Container onClick={onClick}>
            {(item.permanentShown === false && item.shown ===  false) &&
                <C.image src={Logo}></C.image>
            }
            { (item.permanentShown === true || item.shown === true) &&  item.item !== null &&
                <C.image src={iconsType[item.item].icon}/>            }
        </C.Container>
    )
}