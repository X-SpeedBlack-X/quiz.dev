export default class ResponseModel {
  #value: string;
  #certain: boolean;
  #answerRevealed: boolean;

  constructor(value: string, certain: boolean, answerRevealed = false) {
    this.#value = value;
    this.#certain = certain;
    this.#answerRevealed = answerRevealed;
  }

  static responseRight(value: string) {
    return new ResponseModel(value, true);
  }

  static responseWrong(value: string) {
    return new ResponseModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get certain() {
    return this.#certain;
  }

  get answerRevealed() {
    return this.#answerRevealed;
  }

  toReveal() {
    return new ResponseModel(this.#value, this.#certain, true);
  }

  static createUsedObj(obj: ResponseModel): ResponseModel {
    return new ResponseModel(obj.value, obj.certain, obj.answerRevealed);
  }

  toObject() {
    return {
      value: this.#value,
      certain: this.#certain,
      answerRevealed: this.#answerRevealed,
    };
  }
}
