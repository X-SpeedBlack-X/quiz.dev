import Link from "next/link";

type ButtonProps = {
  href?: string;
  text: string;
  onClick?: (e: any) => void;
};

export function Button(props: ButtonProps) {
  function renderButton() {
    return (
      <button
        className="bg-purple-400 rounded-lg font-extralight text-xl px-8 py-3 mt-6 hover:scale-105"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
