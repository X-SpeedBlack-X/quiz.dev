type EnunciateProps = {
  text: string;
};

export function Enunciate(props: EnunciateProps) {
  return (
    <div className="flex justify-center">
      <span className="text-4xl font-bold">{props.text}</span>
    </div>
  );
}
