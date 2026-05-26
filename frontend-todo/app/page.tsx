"use cliente"

import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]); 
  const [novaTarefa, setNovaTarefa] = useState("");

  const backendUrl = "http://127.0.0.1:8000/tarefas";

  // Buscar tarefas
  const buscarTarefas = async () => {
    try {
      const resposta = await fetch(backendUrl);
      const dados = await resposta.json();
      setTarefas(dados); // Salva as tarefas recebidas no estado
    } catch (erro) {
      console.error("Erro ao buscar tarefas:", erro);
    }
  };

  // Carrega as tarefas quando a página inicia
  useEffect(() => {
    buscarTarefas();
  }, []);

  const deletarTarefa = async (id) => {
    try {
      const resposta = await fetch(`${backendUrl}/${id}`, {
        method: "DELETE",
      });

      if (resposta.ok) {
        buscarTarefas(); // Atualiza a lista tirando a tarefa que foi apagada
      }
    } catch (erro) {
      console.error("Erro ao deletar tarefa:", erro);
    }
  };
}