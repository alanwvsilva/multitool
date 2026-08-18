import { Button } from "@heroui/react";
import { ArrowLeftIcon, PocketKnifeIcon } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="flex flex-col items-center gap-8">
      <PocketKnifeIcon className="size-40" />

      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-bold">Page not found</p>
      </div>

      <Button variant="primary" onClick={() => navigate("/")}>
        <ArrowLeftIcon />
        Go back home
      </Button>
    </div>
  );
}
