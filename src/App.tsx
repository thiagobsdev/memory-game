import * as C from "./App.styled.components"
import Logo from "./assets/memory-game.png"
import { Button } from "./components/Button/Index"
import { InfoItem } from "./components/InfoItem/Index"
import restart from "./assets/svgs/restart.svg"
import { useEffect, useState } from "react"
import { GridItem } from "./components/GridItem/Index"
import { GridType } from "../src/type/GridType"
import { iconsType } from "../src/helpers/Types"
import { FormatTimeElapsed } from "./helpers/FormatTime"
import { FormatMoviment } from "./helpers/FormatMov"




function App() {


  const [playing, setplaying] = useState<boolean>(true)
  const [gridTemplate, setgridTemplate] = useState<GridType[]>([])
  let [time, setTime] = useState<number>(0)
  const [mov, setMov] = useState<number>(0)
  const [movCount, setMovCount] = useState<number>(0)

  useEffect(() => {
    resetAndCreateGrid()
  }, [])


  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTime(time + 1)
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time, playing])

  useEffect(() => {

    if (mov === 2) {
      setMovCount(movCount + 1)
      let opened = gridTemplate.filter((item) => item.shown == true)

      if (opened.length >= 2) {
        if (opened[0].item === opened[1].item) {

          let tmpGrid = [...gridTemplate]
          tmpGrid.map((item) => {
            if (item.shown) {
              item.shown = false
              item.permanentShown = true
            }
          })
          setgridTemplate(tmpGrid)

        } else {

          setTimeout(() => {
            let tmpGrid = [...gridTemplate]
            tmpGrid.map((item) => {
              if (item.shown) {
                item.shown = false
              }
            })
            setgridTemplate(tmpGrid)
          }, 1000);

        }
        setMov(0)

      }

    }




  }, [mov, gridTemplate])

  useEffect(() => {
    if ((gridTemplate.every((item) => item.permanentShown) && movCount != 0)) {
      setplaying(false)
    }
  }, [gridTemplate])


  function resetAndCreateGrid() {
    setMov(0)
    setTime(0)
    setMovCount(0)
    setgridTemplate([])

    setplaying(true)

    let tmpGrid: GridType[] = [];

    for (let i = 0; i < (iconsType.length * 2); i++) { tmpGrid.push({ item: null, permanentShown: false, shown: false }) }

    for (let i = 0; i < 2; i++) {
      for (let index = 0; index < iconsType.length; index++) {
        let pos = Math.floor(Math.random() * 12);

        if (tmpGrid[pos].item == null) {
          tmpGrid[pos].item = index;
        } else {
          while (tmpGrid[pos].item != null && index <= iconsType.length) {
            pos = Math.floor(Math.random() * 12);

          }
          tmpGrid[pos].item = index;
        }
      }
    }
    setgridTemplate(tmpGrid);

  }


  function handleCard(index: number) {
    if (playing && gridTemplate[index].item !== null && gridTemplate[index].shown !== true && mov < 2) {

      let tmpGrid = [...gridTemplate]
      tmpGrid[index].shown = true;
      setgridTemplate(tmpGrid)
      setMov(mov + 1)
    }

  }

  return (
    <div>
      <C.Container>
        <C.Info>
          <C.Header>
            <C.logo src={Logo} />
            <C.Titulo>
              Jogo da Memória
            </C.Titulo>
          </C.Header>

          <InfoItem label="Tempo" value={FormatTimeElapsed(time)} />
          <InfoItem label="Movimentos" value={FormatMoviment(movCount)} />

          <Button icon={restart} label="Reiniciar" onClick={resetAndCreateGrid} />
        </C.Info>
        <C.Grid>
          {gridTemplate.map((item, index) => {
            return (
              <GridItem item={item} onClick={() => handleCard(index)} key={index} />
            )
          }
          )
          }
        </C.Grid>
      </C.Container>

    </div>
  )
}

export default App
