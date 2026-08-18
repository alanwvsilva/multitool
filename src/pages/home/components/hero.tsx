import { PocketKnifeIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center gap-2">
        <PocketKnifeIcon className="size-40" />
        <div className="text-end">
          <h1 className="text-6xl font-bold">Multitool</h1>
          <span className="text-xs opacity-50">by Alan Silva</span>
        </div>
      </div>

      <h2 className="text-4xl font-bold">A toolbox for fast daily tasks</h2>
      <p className="opacity-50">
        If you want to add a new tool, contribute on{" "}
        <a
          className="underline"
          href="https://github.com/alanwvsilva/multitool"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
