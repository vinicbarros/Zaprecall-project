import React from "react";
import Question from "./Question";
import Footer from "./Footer";
import logo from '../assets/img/logo.png';

export default function FlashScreen() {

  const [answerZap, setAnswerZap] = React.useState([]);

  const questions = [
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

  function mix() {
    return 0.5 - Math.random();
  }

  return (
    <section className="screenTwo">
      <header>
        <img src={logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </header>
      <section className="questions">
        {questions
          .sort(mix)
          .slice(4)
          .map((question, index) => (
            <Question
              key={index}
              questionNumber={index}
              question={question.question}
              answer={question.answer}
              setAnswered={setAnswerZap}
              answerZap={answerZap}
            />
          ))}
      </section>
      <Footer answerZap={answerZap} answerNumber={answerZap.length}/>
    </section>
  );
}
