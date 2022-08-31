import React from "react"
import './Planetstyle.css'
import State from "./State"
import sun from "./images/sun.jpg"
import Mercury from "./images/Mercury.jpg" 
import Venus from "./images/Venus.jpg" 
import Mars from "./images/Mars.jpg" 
import Jupiter from "./images/Jupiter.jpg" 
import Saturn from "./images/Saturn.jpg" 
import Uranus from "./images/Uranus.jpg" 
import Neptune from "./images/Neptune.jpg" 
import Pluto from "./images/Pluto.jpg" 
import Earth from "./images/Earth.jpg"


export default function Planet(){

       const [planetState,setPlanetState]=React.useState(State)//ADD

//ADD new line to extract name of images
            const arrayOfImagesNames=planetState.map(item =>item.name )
             const arrayPlanetState=planetState.map(item =>item.on)
             const arrayPlanetDescription=planetState.map(item =>item.description)
            // console.log(arrayOfImagesNames)
            //  console.log(arrayPlanetState)
            //  console.log(arrayPlanetDescription)
const [descvalue,setDescvalue]=React.useState()
    function changeToDescription(id){

        // setPlanetState(prev => {
        //     return prev.map(elementP=>{
        //         return elementP.id===id?  {...elementP,on:!elementP.on}:elementP
        //     })  })
            
        setDescvalue(prev=> planetState[id].description)
    //   console.log(planetState[id].description)
// console.log(arrayPlanetState)
// console.log(arrayPlanetDescription)

    }
//   console.log(planetState[0].description)
const d=  Date()
const [e,seE] = React.useState( d)
// setInterval(e,1000)
// console.log(React.useEffect(setInterval( e, 1000)),[e])
    return (
        <div className="grid-container">

<div className="grid-container-div"><p className="text--class">
{descvalue}
</p></div>

            
                 <div className="solar " >
                 
              <img className="state--valuesun" src={sun}  onClick={()=>changeToDescription(0)}/>
              <img className="state--value1 share" src={Mercury} onClick={()=>changeToDescription(1)}/>
              <img className="state--value2 share" src={Venus}  onClick={()=>changeToDescription(2)}/>
                <img className="state--value3 share" src={Earth}onClick={()=>changeToDescription(3)} />
                 <img className="state--value4 share" src={Mars}  onClick={()=>changeToDescription(4)}/>
                <img className="state--value5 share" src={Jupiter}  onClick={()=>changeToDescription(5)}/>
                 <img className="state--value6 share" src={Saturn}  onClick={()=>changeToDescription(6)}/>
                  <img className="state--value7 share" src={Uranus}  onClick={()=>changeToDescription(7)}/>
                <img className="state--value8 share" src={Neptune}  onClick={()=>changeToDescription(8)}/>                
                <img className="state--value9 share" src={Pluto}  onClick={()=>changeToDescription(9)}/>
            </div>
            
        </div>
    )
}