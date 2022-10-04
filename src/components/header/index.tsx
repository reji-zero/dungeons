import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.css";

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="header">
      <a href="/">Dungeon Manager</a>
    </div>
  );
});
