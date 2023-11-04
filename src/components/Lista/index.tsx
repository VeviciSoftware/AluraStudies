import React from "react";
import style from "./Lista.module.scss";

function Lista() {
    const tarefas = [{
        tarefa: "React",
        tempo: "2:00:00",
    }, {
        tarefa: "Javascript",
        tempo: "1:00:00",
    }, {
        tarefa: "Typescript",
        tempo: "1:30:00",
    }];
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;