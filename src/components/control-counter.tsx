import { useControls } from "./hooks/useControls"

export function ControlCounter(){

    const controls = useControls()

    return (
        <div>
            <button onClick={()=>{
                controls.actions.reset
            }}>
            Resetta
            </button>

            <button
            onClick={()=>{
                controls.actions.addition
            }}>
            Aumenta
            </button>

            <button
            onClick={()=>{
                controls.actions.subtraction
            }}>
            Diminuisci
            </button>
        </div>
    )
}