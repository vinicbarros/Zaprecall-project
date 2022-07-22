import party from '../assets/img/party.png';
import sad from '../assets/img/sad.png';

export default function Footer({ answerZap, answerNumber }) {

  return (
    <footer>
      {answerNumber === 4 && !answerZap.includes("forgot") && (
        <div className="message">
          <h5>
            <img src={party} alt="" />
            Parabéns!
          </h5>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </div>
      )}
      {answerNumber === 4 && answerZap.includes("forgot") && (
        <div className="message">
          <h5>
            <img src={sad} alt="" />
            Putz...
          </h5>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </div>
      )}
      <h4>{answerZap.length}/4 CONCLUÍDOS</h4>
      <div>
        {answerZap.map((answer, index) => {
          switch (answer) {
            case "forgot":
              return <ion-icon key={index} name="close-circle"></ion-icon>;
            case "almost":
              return <ion-icon key={index} name="help-circle"></ion-icon>;
            case "zap":
              return <ion-icon key={index} name="checkmark-circle"></ion-icon>;
            default:
              return null;
          }
        })}
      </div>
    </footer>
  );
}
