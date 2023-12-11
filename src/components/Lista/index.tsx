import style from './Lista.module.scss';
import Item from './Item';
import { ITarefas } from '../../types/ITarefas';

interface Props {
    tarefas: ITarefas[],
    selecionarTarefa: (tarefaSelecionada: ITarefas) => void
}

function Lista( {tarefas, selecionarTarefa}: Props ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionarTarefa={selecionarTarefa} 
                        key={item.id}
                       {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;