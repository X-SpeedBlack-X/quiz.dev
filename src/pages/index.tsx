import { useState } from "react";
import { Questions } from "../components/Questions";
import QuestionModel from "../model/question";
import ResponseModel from "../model/response";

const questionsMock = new QuestionModel(1, "Qual é a Melhor cor?", [
  ResponseModel.responseWrong("Verde"),
  ResponseModel.responseWrong("Roxo"),
  ResponseModel.responseWrong("Branca"),
  ResponseModel.responseRight("Preto"),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionsMock);

  function onResponse(indice: number) {
    setQuestion(question.replyWith(indice));
  }

  function timeUp() {
    if (!question.answered) {
      setQuestion(question.replyWith(-1));
    }
  }

  return (
    <div className="py-8">
      <div className="flex justify-center items-center h-screen ">
        <Questions value={question} onResponse={onResponse} timeUp={timeUp} />
      </div>
    </div>
  );
}
