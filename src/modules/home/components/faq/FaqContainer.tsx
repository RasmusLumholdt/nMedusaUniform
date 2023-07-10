import { UniformSlot, registerUniformComponent } from "@uniformdev/canvas-react"

export interface FaqContainerProps{
    title:string
}


const FaqContainer = ({title}:FaqContainerProps) => {
    
    return (
        <div>
            <h2>{title}</h2>
            <div className="questions">
                <UniformSlot name="questions"/>
            </div>
        </div>
    )
}

export default FaqContainer
registerUniformComponent({ type: "FaqContainer", component: FaqContainer })