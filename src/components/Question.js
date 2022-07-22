import React from "react";

export default function Question({ 
  questionNumber,
  question,
  answer, 
  setAnswered, 
  answerZap }) {
  const [questionState, setQuestionState] = React.useState("");

  return (
    <div className={"question " + questionState}>
      {(() => {
        switch (questionState) {
          case "":
            return (
              <div
                onClick={() => {
                  setQuestionState("showed");
                }}
              >
                <h4>Pergunta {questionNumber + 1}</h4>
                <ion-icon name="play-outline"></ion-icon>
              </div>
            );
          case "showed":
            return (
              <div
                onClick={() => {
                  setQuestionState("answer");
                }}
              >
                <p>{question}</p>
                <ion-icon name="return-down-back-outline"></ion-icon>
              </div>
            );
          case "answer":
            return (
              <div>
                <p>{answer}</p>
                <div className="wrap">
                  <div onClick={() => {setAnswered([...answerZap, "forgot"]); setQuestionState("forgot")}} className="card forgot">Não lembrei</div>
                  <div onClick={() => {setAnswered([...answerZap, "almost"]); setQuestionState("almost")}} className="card almostForgot">Quase não lembrei</div>
                  <div onClick={() => {setAnswered([...answerZap, "zap"]); setQuestionState("zap")}} className="card zap">Zap!</div>
                </div>
              </div>
            );
          case "forgot":
            return (
              <div>
                <h4>Pergunta {questionNumber + 1}</h4>
                <ion-icon name="close-circle"></ion-icon>
              </div>
            );
          case "almost":
            return (
              <div>
                <h4>Pergunta {questionNumber + 1}</h4>
                <ion-icon name="help-circle"></ion-icon>
              </div>
            );
          case "zap":
            return (
              <div>
                <h4>Pergunta {questionNumber + 1}</h4>
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
