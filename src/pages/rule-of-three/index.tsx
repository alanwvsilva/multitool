import ToolLayout from "@/layouts/tool-layout";
import { Chip, Input, Separator } from "@heroui/react";
import { useState } from "react";

function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 4,
  }).format(value);
}

function onlyNumbers(value: string) {
  return value.replace(/[^0-9.]/g, "");
}

export default function RuleOfThreePage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const numA = parseFloat(a);
  const numB = parseFloat(b);
  const numC = parseFloat(c);
  const hasResult =
    a !== "" &&
    b !== "" &&
    c !== "" &&
    isFinite(numA) &&
    isFinite(numB) &&
    isFinite(numC) &&
    numA !== 0;
  const result = hasResult ? formatNumber((numB * numC) / numA) : "X";

  return (
    <ToolLayout toolKey="rule-of-three">
      <div className="w-full space-y-2">
        <div className="flex items-center gap-4">
          <Input
            className="w-28 text-3xl"
            value={a}
            placeholder="A"
            onChange={(e) => setA(onlyNumbers(e.target.value))}
          />
          <div className="flex-1 relative">
            <Separator />
            <Chip
              color="accent"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              is to
            </Chip>
          </div>
          <Input
            className="w-28 text-3xl"
            value={b}
            placeholder="B"
            onChange={(e) => setB(onlyNumbers(e.target.value))}
          />
        </div>

        <div className="flex justify-center opacity-50">
          <Chip>as</Chip>
        </div>

        <div className="flex items-center gap-4">
          <Input
            className="w-28 text-3xl"
            value={c}
            placeholder="C"
            onChange={(e) => setC(onlyNumbers(e.target.value))}
          />
          <div className="flex-1 relative">
            <Separator />
            <Chip
              color="success"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              is to
            </Chip>
          </div>
          <Input
            className="w-28 text-3xl ring"
            variant="secondary"
            value={result}
            readOnly
          />
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-2 text-sm">
        <h3 className="text-2xl font-bold">How to use</h3>
        <div className="opacity-50">
          <p className="mb-2">
            The rule of three solves problems where two values relate in the
            same proportion: A is to B as C is to X.
          </p>
          <p>Example: if 2 kg of apples cost $6, how much do 5 kg cost?</p>
          <p>Set A = 2, B = 6 and C = 5. The result is X = 6 × 5 ÷ 2 = 15.</p>
        </div>
      </div>
    </ToolLayout>
  );
}
