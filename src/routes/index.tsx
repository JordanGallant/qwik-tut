import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h2>Okie Dokie</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "A blog for mario",
    },
  ],
  links:[
    {
      rel:"stylesheet",
      href: "url.com/url"
    }
  ],
};
