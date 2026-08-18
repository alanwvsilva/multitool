import Hero from "./components/hero";
import ToolList from "./components/tool-list";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <ToolList />
    </div>
  );
}
