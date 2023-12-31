import fs from "node:fs/promises";
import {join} from "node:path";

import {Code} from "bright";

import {H1, Paragraph} from "@/components/typography";

import Toggle from "./toggle";

async function readContent() {
  let path = join(
    process.cwd(),
    "src",
    "app",
    "(marketing)",
    "machines",
    "toggle",
    "machine.ts"
  );

  try {
    return await fs.readFile(path, "utf-8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return null;
  }
}

export default async function TogglePage() {
  let machineContent = await readContent();
  return (
    <div className="flex-1">
      <H1>Toggle</H1>
      <Toggle />
      <article>
        <Paragraph>
          The provided code is written in TypeScript and uses the XState library
          to create a state machine. XState is a library for creating,
          interpreting, and executing finite state machines and statecharts, as
          well as managing invocations of those machines as actors. The
          createMachine function is imported from the XState library and is used
          to define a state machine. The toggleMachine is an exported variable
          that holds the state machine. The state machine has an id of "toggle"
          and an initial state of "inactive". The initial property defines the
          state that the machine should be in when it starts. The states
          property is an object that defines the different states that the
          machine can be in. In this case, there are two states: "active" and
          "inactive". Each state (i.e., "active" and "inactive") has an on
          property, which is an object that defines the transitions between
          states. The on object has a property for each event that can cause a
          transition. In this case, there is only one event: "TOGGLE". When the
          "TOGGLE" event occurs, the machine transitions to a different state.
          If the machine is in the "active" state and the "TOGGLE" event occurs,
          it transitions to the "inactive" state. Conversely, if the machine is
          in the "inactive" state and the "TOGGLE" event occurs, it transitions
          to the "active" state. This state machine could be used, for example,
          to manage the state of a toggle button in a React application. The
          "active" state could represent the button being on, and the "inactive"
          state could represent the button being off. The "TOGGLE" event could
          be triggered whenever the button is clicked.
        </Paragraph>
      </article>
      <Code lineNumbers theme="github-dark" lang="ts">
        {machineContent}
      </Code>
    </div>
  );
}
