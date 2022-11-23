type StatisticProps = {
  value: any;
  text: string;
  bg?: string;
  color?: string;
};

export function Statistic(props: StatisticProps) {
  return (
    <div className="flex flex-col items-center m-2">
      <div
        className="valor flex justify-center items-center md:h-44 md:w-44 h-40 w-40 rounded-full text-4xl"
        style={{
          background: props.bg ?? "#fdd60f",
          color: props.color ?? "#333",
        }}
      >
        {props.value}
      </div>

      <div className="texto text-['#ddd'] text-lg font-normal">
        {props.text}
      </div>
    </div>
  );
}
