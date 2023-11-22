import { ITarefas } from '../../../types/ITarefas';
import style from '../Lista.module.scss';

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefas) {
  console.log('item atual:', tarefa, tempo, selecionado, completado, id);
  return (
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  );
}