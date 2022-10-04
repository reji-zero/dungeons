import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.css";

export default component$(()=>{
    useStyles$(styles);
    return (<div class="menu">
        <a href="/">Home</a>
        <a href="/player">player</a>
        <a href="/database">database</a>
        <a href="/maps">maps</a>
    </div>);
});
