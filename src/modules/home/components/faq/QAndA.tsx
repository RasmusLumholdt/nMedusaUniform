import { registerUniformComponent } from "@uniformdev/canvas-react";
import { useState } from "react"

export interface QAndAProps  {
    question: string
    answer: string
}


const QAndA = ({question, answer}:QAndAProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="q-and-a">
            <div className="question" onClick={() => setIsOpen(!isOpen)}>
            <h2>{question}  {isOpen ? '▲' : '▼'}</h2>
            </div>
           <div className={`answer ${isOpen ? 'open' : 'closed'}`}>
            <p>{answer}</p>
           </div>
           
        </div>
    )
}

export default QAndA

registerUniformComponent({ type: "QAndA", component: QAndA })