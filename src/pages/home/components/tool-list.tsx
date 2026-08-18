import {
  ArrowLeftRight,
  DecimalsArrowRight,
  KeyRoundIcon,
  PiIcon,
} from "lucide-react";
import { Link } from "wouter";
import content from "@/data/content.json";

function getIcon(key: string) {
  let Icon = PiIcon;

  switch (key) {
    case "password-generator":
      Icon = KeyRoundIcon;
      break;
    case "uuid-generator":
      Icon = DecimalsArrowRight;
      break;
    case "rule-of-three":
      Icon = ArrowLeftRight;
      break;
  }

  return Icon;
}

export default function ToolList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {content.map((tool) => {
        const Icon = getIcon(tool.key);

        return (
          <Link
            key={tool.key}
            href={tool.url}
            className="bg-white/5 hover:bg-white/10 flex flex-col gap-4 rounded-2xl p-6 shadow-md transition-all duration-150 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <Icon className="size-16" />
              <h2>{tool.title}</h2>
            </div>
            <p className="text-sm opacity-50">{tool.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
