import { CheckIcon, CopyIcon, RefreshCcwIcon } from "lucide-react";
import ToolLayout from "@/layouts/tool-layout";
import { Button, Input, toast, Tooltip } from "@heroui/react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export default function UuidGeneratorPage() {
  const [uuid, setUuid] = useState(generateUUID());
  const [_, copy] = useCopyToClipboard();

  function generateUUID() {
    return crypto.randomUUID();
  }

  return (
    <ToolLayout toolKey="uuid-generator">
      <div className="w-full flex items-center gap-2">
        <Input className="w-full text-3xl" value={uuid} readOnly />

        <Tooltip delay={0}>
          <Button
            isIconOnly
            variant="primary"
            onClick={() => setUuid(generateUUID())}
          >
            <RefreshCcwIcon />
          </Button>

          <Tooltip.Content>
            <p>Generate new UUID</p>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip delay={0}>
          <Button
            isIconOnly
            variant="secondary"
            onClick={() => {
              copy(uuid);
              toast("Copied to clipboard", {
                timeout: 1500,
                indicator: <CheckIcon />,
              });
            }}
          >
            <CopyIcon />
          </Button>

          <Tooltip.Content>
            <p>Copy password to clipboard</p>
          </Tooltip.Content>
        </Tooltip>
      </div>
    </ToolLayout>
  );
}
