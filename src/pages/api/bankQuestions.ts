import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a doença de chagas?", [
    ResponseModel.responseWrong("Abelha"),
    ResponseModel.responseWrong("Barata"),
    ResponseModel.responseWrong("Pulga"),
    ResponseModel.responseRight("Barbeiro"),
  ]),

  new QuestionModel(
    202,
    "Qual fruta é conhecida no Norte e Nordeste como 'jerimum'?",
    [
      ResponseModel.responseWrong("Caju"),
      ResponseModel.responseWrong("Côco"),
      ResponseModel.responseWrong("Chuchu"),
      ResponseModel.responseRight("Abóbora"),
    ]
  ),

  new QuestionModel(203, "Qual é o coletivo de cães?", [
    ResponseModel.responseWrong("Manada"),
    ResponseModel.responseWrong("Alcateia"),
    ResponseModel.responseWrong("Rebanho"),
    ResponseModel.responseRight("Matilha"),
  ]),

  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      ResponseModel.responseWrong("Equilátero"),
      ResponseModel.responseWrong("Isóceles"),
      ResponseModel.responseWrong("Trapézio"),
      ResponseModel.responseRight("Escaleno"),
    ]
  ),

  new QuestionModel(205, "Quem compôs o Hino da Independência?", [
    ResponseModel.responseWrong("Castro Alves"),
    ResponseModel.responseWrong("Manuel Bandeira"),
    ResponseModel.responseWrong("Carlos Gomes"),
    ResponseModel.responseRight("Dom Pedro I"),
  ]),
];

export default questions;
