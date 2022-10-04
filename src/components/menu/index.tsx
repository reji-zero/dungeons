import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.css";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="menu">
      <a href="/player">Player</a>
      <a href="/database">Database</a>
      <a href="/maps">Maps</a>
      <a href="/notes">Notes</a>
    </div>
  );
});
