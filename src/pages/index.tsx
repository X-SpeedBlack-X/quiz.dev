import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Quiz } from "../components/Quiz";
import QuestionModel from "../model/question";

const BASE_URL = "https://quiz-of-dev.vercel.app/api";

export default function Home() {
  const router = useRouter();

  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [responsesRight, setResponsesRight] = useState<number>(0);

  async function loadingQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const idsQuestions = await resp.json();
    setIdsQuestions(idsQuestions);
  }

  async function loadingQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.createUsedObj(json);

    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadingQuestionsIds();
  }, []);

  useEffect(() => {
    idsQuestions.length > 0 && loadingQuestion(idsQuestions[0]);
  }, [idsQuestions]);

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered);
    const certain = questionAnswered.responseRight;
    setResponsesRight(responsesRight + (certain ? 1 : 0));
  }

  function nextQuestionId() {
    const nextIndex = idsQuestions.indexOf(question.id) + 1;
    return idsQuestions[nextIndex];
  }

  function nextQuestion(nextId: number) {
    loadingQuestion(nextId);
  }

  function finalize() {
    router.push({
      pathname: "/resulte",
      query: {
        total: idsQuestions.length,
        responsesRight: responsesRight,
      },
    });
  }

  function nextStep() {
    const nextId = nextQuestionId();
    nextId ? nextQuestion(nextId) : finalize();
  }

  return question ? (
    <Quiz
      question={question}
      lastQuestion={nextQuestionId() === undefined}
      questionAnswered={questionAnswered}
      nextStep={nextStep}
    />
  ) : (
    false
  );
}
