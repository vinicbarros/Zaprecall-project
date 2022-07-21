import React from "react";

export default function Question({ QuestionNumber, Question }) {
  const [questionState, setQuestionState] = React.useState("");

  return (
    <div className={"question " + questionState}>
      {(() => {
        switch (questionState) {
          case "":
            return (
              <>
                <h4>Pergunta {QuestionNumber + 1}</h4>
                <ion-icon
                  name="play-outline"
                  onClick={() => {
                    setQuestionState("showed");
                  }}
                ></ion-icon>
              </>
            );
          case "showed":
            return (
              <>
                <p>{Question}</p>
              </>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}