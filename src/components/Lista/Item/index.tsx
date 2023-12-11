import { ITarefas } from '../../../types/ITarefas';
import style from './Item.module.scss';

interface Props extends ITarefas {
  selecionarTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item(
  {
   tarefa,
   tempo,
   selecionado,
   completado,
   id,
   selecionarTarefa
  }: Props) {
  //console.log('item atual:', tarefa, tempo, selecionado, completado, id);
  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionadoPositive : style.itemSelecionadoDefault }`} 
        onClick={() => selecionarTarefa(
      {
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      }
    
    )}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  );
}