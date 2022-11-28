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

  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    ResponseModel.responseWrong("Perder"),
    ResponseModel.responseWrong("Fracassar "),
    ResponseModel.responseWrong("Desprezar"),
    ResponseModel.responseRight("Conseguir"),
  ]),

  new QuestionModel(207, "Em que país nasceu Carmen Miranda?", [
    ResponseModel.responseWrong("Argentina"),
    ResponseModel.responseWrong("Espanha"),
    ResponseModel.responseWrong("Brasil"),
    ResponseModel.responseRight("Portugal"),
  ]),

  new QuestionModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      ResponseModel.responseWrong("Costa e Silva"),
      ResponseModel.responseWrong("Emílio Médici"),
      ResponseModel.responseWrong("Ernesto Geisel"),
      ResponseModel.responseRight("João Figueiredo"),
    ]
  ),

  new QuestionModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      ResponseModel.responseWrong("Ás"),
      ResponseModel.responseWrong("Nove"),
      ResponseModel.responseWrong("Rei"),
      ResponseModel.responseRight("Valete"),
    ]
  ),

  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    ResponseModel.responseWrong("Vela"),
    ResponseModel.responseWrong("Vento"),
    ResponseModel.responseWrong("Vênia"),
    ResponseModel.responseRight("Veia"),
  ]),

  new QuestionModel(211, "Que nome se dá à purificação por meio da água?", [
    ResponseModel.responseWrong("Abrupção"),
    ResponseModel.responseWrong("Abolição"),
    ResponseModel.responseWrong("Abnegação"),
    ResponseModel.responseRight("Ablução"),
  ]),

  new QuestionModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      ResponseModel.responseWrong("Monte Branco"),
      ResponseModel.responseWrong("Monte Fuji"),
      ResponseModel.responseWrong("Monte Carlo"),
      ResponseModel.responseRight("Monte Everest"),
    ]
  ),
  new QuestionModel(213, "Em que parte do corpo se encontra a epiglote?", [
    ResponseModel.responseWrong("Estômago"),
    ResponseModel.responseWrong("Pâncreas"),
    ResponseModel.responseWrong("Rim"),
    ResponseModel.responseRight("Pescoço"),
  ]),

  new QuestionModel(214, "A compensação por perda é chamada de...", [
    ResponseModel.responseWrong("Déficit"),
    ResponseModel.responseWrong("Indexação"),
    ResponseModel.responseWrong("Indébito"),
    ResponseModel.responseRight("Indenização"),
  ]),
  new QuestionModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      ResponseModel.responseWrong("Cuca"),
      ResponseModel.responseWrong("Curupira"),
      ResponseModel.responseWrong("Boitatá"),
      ResponseModel.responseRight("Saci-pererê"),
    ]
  ),

  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    ResponseModel.responseWrong("Marechal Deodoro"),
    ResponseModel.responseWrong("Barão de Mauá"),
    ResponseModel.responseWrong("Marquês de Pombal"),
    ResponseModel.responseRight("Duque de Caxias"),
  ]),

  new QuestionModel(
    217,
    "Quem é o criador da linguagem de programa JavaScript??",
    [
      ResponseModel.responseWrong("Alan Turing"),
      ResponseModel.responseWrong("Bill Gates"),
      ResponseModel.responseWrong("Mark Zuckerberg"),
      ResponseModel.responseRight("Brendan Eich"),
    ]
  ),
];

export default questions;
