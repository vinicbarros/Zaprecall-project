import Question from "./Question";

export default function FlashScreen() {
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
        <img src="/assets/img/logo.png" alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </header>
      <section className="questions">
        {questions
          .sort(mix)
          .slice(4)
          .map((question, index) => (
            <Question
              QuestionNumber={index}
              Question={question.question}
              Answer={question.answer}
            />
          ))}
      </section>
    </section>
  );
}
