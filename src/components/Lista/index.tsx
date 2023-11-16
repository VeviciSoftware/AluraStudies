import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from './Item';

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: "React",
        tempo: "2:00:00",
    }, {
        tarefa: "Javascript",
        tempo: "1:00:00",
    }, {
        tarefa: "Typescript",
        tempo: "1:30:00",
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar Estado", tempo: "5:00:00"}])
            }}>
            Estudos do dia 
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                       {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;