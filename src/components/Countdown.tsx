import { CountdownCircleTimer } from "react-countdown-circle-timer";

type CountdownProps = {
  duration: number;
  timeUp: () => void;
};
export function Countdown(props: CountdownProps) {
  return (
    <div className="temporizador flex text-2xl my-4">
      <CountdownCircleTimer
        size={100}
        isPlaying
        duration={props.duration}
        onComplete={props.timeUp}
        colors={["#bce596", "#f7b801", "#ed827a", "#A30000"]}
        colorsTime={[7, 4, 2, 0]}
        initialRemainingTime={10}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
