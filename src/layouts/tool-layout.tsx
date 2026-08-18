import { Button } from "@heroui/react";
import { ArrowLeftIcon, PocketKnifeIcon } from "lucide-react";
import content from "@/data/content.json";
import { Link } from "wouter";

export default function ToolLayout({
  toolKey,
  children,
}: {
  toolKey: string;
  children: React.ReactNode;
}) {
  const toolData = content.find((tool) => tool.key === toolKey);
  const title = toolData?.title;
  const description = toolData?.description;

  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between gap-4">
        <PocketKnifeIcon className="size-10" />
        <h2 className="text-4xl font-bold">{title}</h2>

        <Link href="/">
          <Button>
            <ArrowLeftIcon />
            Back
          </Button>
        </Link>
      </div>

      <div className="space-y-2">
        <p className="text-sm opacity-50">{description}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}
