import React from "react"
import { useParams } from "react-router-dom";

function Detalhes(){
    const params = useParams()
    console.log(params.id)

    return (
        <div>

            detalhes
            
        </div>
    )
}

export default Detalhes;