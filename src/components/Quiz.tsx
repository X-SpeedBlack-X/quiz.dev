import QuestionModel from "../model/question";
import { Button } from "./Button";
import { Questions } from "./Questions";

type QuizProps = {
  question: QuestionModel;
  lastQuestion: boolean;
  questionAnswered: (question: QuestionModel) => void;
  nextStep: () => void;
};

export function Quiz(props: QuizProps) {
  function onResponse(index: number) {
    if (props.question.noAnswered) {
      props.questionAnswered(props.question.replyWith(index));
    }
  }
  return (
    <div className="flex flex-col justify-center items-center py-9">
      {props.question ? (
        <Questions
          value={props.question}
          timeForAnswer={15}
          onResponse={onResponse}
          timeUp={props.nextStep}
        />
      ) : (
        false
      )}

      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
