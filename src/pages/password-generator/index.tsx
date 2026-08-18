import { CheckIcon, CopyIcon, RefreshCcwIcon } from "lucide-react";
import ToolLayout from "@/layouts/tool-layout";
import { Button, Input, toast, Tooltip } from "@heroui/react";
import { useEffect, useState } from "react";
import { Slider } from "@heroui/react";
import { CheckboxGroup, Checkbox, Label } from "@heroui/react";
import generator from "generate-password-ts";
import { useCopyToClipboard, useLocalStorage } from "usehooks-ts";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [_, copy] = useCopyToClipboard();
  const [size, setSize] = useLocalStorage("multitool-pass-size", 16);
  const [options, setOptions] = useLocalStorage("multitool-pass-options", [
    "lowercase",
    "uppercase",
    "numbers",
    "symbols",
  ]);

  function generatePassword() {
    return generator.generate({
      length: size,
      lowercase: options.includes("lowercase"),
      uppercase: options.includes("uppercase"),
      numbers: options.includes("numbers"),
      symbols: options.includes("symbols"),
    });
  }

  useEffect(() => {
    setPassword(generatePassword());
  }, [size, options]);

  return (
    <ToolLayout toolKey="password-generator">
      <div className="space-y-4">
        <div className="w-full flex items-center gap-2">
          <Input className="w-full text-3xl" value={password} readOnly />

          <Tooltip delay={0}>
            <Button
              isIconOnly
              variant="primary"
              onClick={() => setPassword(generatePassword())}
            >
              <RefreshCcwIcon />
            </Button>

            <Tooltip.Content>
              <p>Generate new password</p>
            </Tooltip.Content>
          </Tooltip>

          <Tooltip delay={0}>
            <Button
              isIconOnly
              variant="secondary"
              onClick={() => {
                copy(password);
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

        <div className="flex gap-12">
          <div className="w-1/3">
            <Slider
              className="w-full"
              value={size}
              onChange={(value) => setSize(value as number)}
            >
              <Label>Size</Label>
              <Slider.Output />
              <Slider.Track>
                <Slider.Fill />
                <Slider.Thumb />
              </Slider.Track>
            </Slider>
          </div>

          <div>
            <CheckboxGroup
              name="format"
              value={options}
              onChange={(value) => {
                if (!value.length) return;
                setOptions(value);
              }}
            >
              <Label>Characters Used</Label>
              <div className="flex flex-wrap gap-4">
                <Checkbox value="uppercase">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    Uppercase
                  </Checkbox.Content>
                </Checkbox>
                <Checkbox value="lowercase">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    Lowercase
                  </Checkbox.Content>
                </Checkbox>
                <Checkbox value="numbers">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    Numbers
                  </Checkbox.Content>
                </Checkbox>
                <Checkbox value="symbols">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    Symbols
                  </Checkbox.Content>
                </Checkbox>
              </div>
            </CheckboxGroup>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
