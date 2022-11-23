import { shuffle } from "../functions/arrays";
import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #enunciate: string;
  #responses: ResponseModel[];
  #responseRight: boolean;

  constructor(
    id: number,
    enunciate: string,
    responses: ResponseModel[],
    responseRight = false
  ) {
    this.#id = id;
    this.#enunciate = enunciate;
    this.#responses = responses;
    this.#responseRight = responseRight;
  }

  get id() {
    return this.#id;
  }
  get enunciate() {
    return this.#enunciate;
  }
  get responses() {
    return this.#responses;
  }
  get responseRight() {
    return this.#responseRight;
  }

  get noAnswered() {
    return !this.answered;
  }

  get answered() {
    for (let response of this.#responses) {
      if (response.answerRevealed) return true;
    }
    return false;
  }

  replyWith(index: number): QuestionModel {
    const responseRight = this.#responses[index]?.certain;
    const responses = this.#responses.map((response, i) => {
      const responseSelected = index === i;
      const mustReveal = responseSelected || response.certain;
      return mustReveal ? response.toReveal() : response;
    });
    return new QuestionModel(this.id, this.enunciate, responses, responseRight);
  }

  shuffleResponses(): QuestionModel {
    let responseShuffle = shuffle(this.#responses);
    return new QuestionModel(
      this.#id,
      this.#enunciate,
      responseShuffle,
      this.#responseRight
    );
  }

  static createUsedObj(obj: QuestionModel): QuestionModel {
    const responses = obj.responses.map((resp) =>
      ResponseModel.createUsedObj(resp)
    );
    return new QuestionModel(
      obj.id,
      obj.enunciate,
      responses,
      obj.responseRight
    );
  }

  toObject() {
    return {
      id: this.#id,
      enunciate: this.#enunciate,
      answered: this.answered,
      responseRight: this.#responseRight,
      responses: this.#responses.map((resp) => resp.toObject()),
    };
  }
}
