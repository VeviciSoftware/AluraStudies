import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefas } from '../types/ITarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | [] >([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas= {setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
