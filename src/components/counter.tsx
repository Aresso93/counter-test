import { ControlCounter } from "./control-counter";
import { DisplayCounter } from "./display-counter";
import { useControls } from "./hooks/useControls";

export function Counter(){

    const controls = useControls()

    return (
        <>  
        <DisplayCounter
        value={controls.state.counter}
        />

        <ControlCounter
        actions={controls.actions}
        />
        </>
    )

}