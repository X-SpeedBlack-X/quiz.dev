import QuestionModel from "../model/question";
import { Countdown } from "./Countdown";
import { Enunciate } from "./Enunciate";
import { Response } from "./Response";

const letters = [
  {
    valor: "A",
    bg: "#f2c866",
  },
  {
    valor: "B",
    bg: "#f266ba",
  },
  {
    valor: "C",
    bg: "#85d4f2",
  },
  {
    valor: "D",
    bg: "#bce596",
  },
];

type QuestionsProps = {
  value: QuestionModel;
  onResponse: (index: number) => void;
  timeForAnswer?: number;
  timeUp: () => void;
};

export function Questions(props: QuestionsProps) {
  const question = props.value;

  function renderResponse() {
    return question.responses.map((response, i) => {
      return (
        <Response
          key={`${question.id}-${i}`}
          value={response}
          index={i}
          letter={letters[i].valor}
          letterBg={letters[i].bg}
          onResponse={props.onResponse}
        />
      );
    });
  }

  return (
    <div className="flex flex-col items-center">
      <Enunciate text={question.enunciate} />
      <Countdown
        key={question.id}
        duration={props.timeForAnswer ?? 10}
        timeUp={props.timeUp}
      />
      {renderResponse()}
    </div>
  );
}
