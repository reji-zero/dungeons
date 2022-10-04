import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";
import Menu from "../components/menu";

export default component$(() => {
  return (
    <>
      <Header />
      <Menu />
      <Slot />
    </>
  );
});
