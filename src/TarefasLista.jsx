//TarefasLista.jsx

import { useState } from "react";
import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas, onEditTarefa, onDeleteTarefa }) => {
    

    return (
        <ul>
           {tarefas.map((tarefa) => (
            <TarefasItem 
            key={tarefa.id} 
            tarefa={tarefa}
            onEditTarefa={onEditTarefa} 
            onDeleteTarefa={onDeleteTarefa}
            />
           )) }
        </ul>
    );
}

export default TarefasLista;