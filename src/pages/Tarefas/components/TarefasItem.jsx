import { useState } from "react";


const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);


    const handleEdit = () => {
        if(isEditing){
            if(novoTexto.trim()){
                // Atualizar o texto da tarefa
                
            }
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }


    const handleDelete = () => {
        onDeleteTarefa(tarefa.id);
    }

    return (
        <li>
            {tarefa.texto}
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>🗑️</button>
        </li>
    );
}

export default TarefasItem;