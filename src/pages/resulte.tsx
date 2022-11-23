import { useRouter } from "next/router";
import { Button } from "../components/Button";
import { Statistic } from "../components/Statistic";

export default function resulte() {
  const router = useRouter();

  const total = +router.query.total;
  const responsesRights = +router.query.responsesRight;
  const percentage = Math.round((responsesRights / total) * 100);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-3xl my-14">
      <h1 className="text-4xl font-bold">Resultado final </h1>

      <div className="flex lg:flex-row flex-col font-semibold">
        <Statistic text="Perguntas" value={total} />
        <Statistic text="Certas" value={responsesRights} bg="#9cd2aa" />
        <Statistic
          text="Percentual"
          value={`${percentage}%`}
          color="#efefef"
          bg={percentage < 50 ? "#e32b0b" : "#08bf14"}
        />
      </div>
      <Button text="Jogar novamente" href="/" />
    </div>
  );
}
