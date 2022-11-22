// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../bankQuestions";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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
  res.status(200).json(questions[0].toObject());
}
