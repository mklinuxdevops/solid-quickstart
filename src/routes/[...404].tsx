import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://cloudserverhelp.live" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build DevOps Q and A.
      </p>
    </main>
  );
}
