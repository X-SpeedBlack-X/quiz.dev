import questions from "../bankQuestions";

type questionIdProps = {
  req: any;
  res: any;
  query: any;
  status: any;
};

export default function questionsId(
  req: questionIdProps,
  res: questionIdProps
) {
  const idSelected = +req.query.id;

  const questionsSelected = questions.filter(
    (question) => question.id === idSelected
  );

  if (questionsSelected.length === 1) {
    const idQuestion = questionsSelected[0].shuffleResponses();

    res.status(200).json(idQuestion.toObject());
  } else {
    res.status(204).send();
  }
}
