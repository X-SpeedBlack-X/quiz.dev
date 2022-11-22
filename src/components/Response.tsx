import ResponseModel from "../model/response";

type ResponseProps = {
  value: ResponseModel;
  indice: number;
  letter: string;
  letterBg: string;
  onResponse: (indice: number) => void;
};

export function Response(props: ResponseProps) {
  const responses = props.value;
  return (
    <div
      className="resposta flex h-24 w-[80%] md:min-w-[500px] min-w-[300px] m-[6px]"
      onClick={() => props.onResponse(props.indice)}
    >
      <div className="conteudoResposta relative flex-1 flex">
        {!responses.answerRevealed ? (
          <div className="bg-white text-black flex items-center rounded-xl p-4 absolute h-full w-full">
            <div
              className="flex justify-center items-center h-10 w-10 rounded-3xl text-xl font-bold mr-5 text-white"
              style={{
                background: props.letterBg,
              }}
            >
              {props.letter}
            </div>
            <div className="text-xl font-bold">{responses.value}</div>
          </div>
        ) : (
          <div className="verso flex h-full w-full absolute">
            {responses.certain ? (
              <div className="certa flex flex-1 flex-col justify-center items-center bg-green-600 rounded-xl">
                <div>A resposta certa é...</div>
                <div className="valor text-2xl font-bold">
                  {responses.value}
                </div>
              </div>
            ) : (
              <div className="errada flex flex-1 flex-col justify-center items-center bg-red-600 rounded-xl">
                <div>A resposta informada está errada...</div>
                <div className="valor text-2xl font-bold">
                  {responses.value}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
