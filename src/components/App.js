import React, { useState } from "react";
import EnterScreen from "./EnterScreen";
import FlashScreen from "./FlashScreen";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [page, setPage] = useState("screenOne");
  const [deckState, setDeckState] = useState("");

  const deck1 = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula",
    },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __ ",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const deck2 = [
    {
      question: "O que é árvore DOM?",
      answer:
        "É a árvore de elementos do HTML representada como objetos no JavaScript",
    },
    {
      question:
        "Qual a melhor maneira de alterar estilos CSS através do JavaScript?",
      answer: "Adicionando ou removendo classes conforme a necessidade",
    },
    {
      question: "Qual o retorno da expressão banana * 3 ?",
      answer: "NaN",
    },
    {
      question: "O que é um evento no JavaScript?",
      answer:
        "Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário",
    },
    {
      question: "O que são Promises no JavaScript?",
      answer:
        "Uma variavel que guarda uma promessa que depois de um tempo se tornará um valor ou um erro",
    },
    {
      question: "Por que devemos usar promises/assincronismo?",
      answer:
        "Para não travar a execução do código quando temos códigos que demoram para se resolver",
    },
    {
      question: "Qual diferença de requisições GET e POST?",
      answer: "GET para pegar informações e POST para enviar informações",
    },
    {
      question: "O que são Status Codes?",
      answer:
        "Códigos para dar mais informações sobre uma requisição (sucesso/erro de cliente/erro de servidor)",
    },
  ];
  
  return page === "screenOne" ? (
    <EnterScreen
      showScreenTwo={(screen) => setPage(screen)}
      deckState={deckState}
      setDeckState={setDeckState}
      deck1={deck1}
      deck2={deck2}
    />
  ) : (
    <FlashScreen
      deckState={deckState}
      setDeckState={setDeckState}
      deck1={deck1}
      deck2={deck2}
    />
  );
}
