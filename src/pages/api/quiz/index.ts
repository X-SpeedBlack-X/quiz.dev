import { shuffle } from "../../../functions/arrays";
import questions from "../bankQuestions";

export default (req: any, res: any) => {
  const ids = questions.map((question) => question.id);
  res.status(200).json(shuffle(ids));
};
