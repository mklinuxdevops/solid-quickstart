import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Welcome</Title>
      <h1>Welcome Dracula!</h1>
      <Counter />
    </main>
  );
}
