import * as React from "react";
import { default as theme } from 'mdx-deck/themes';
import MDXDeckProvider from 'mdx-deck/dist/Provider';

function Provider(props) {
  return (
    <>
      <MDXDeckProvider {...props} />
      <a
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          color: "#008abe",
          textDecoration: "none"
        }}
        href="https://twitter.com/skn0tt"
      >
        @skn0tt
      </a>
    </>
  )
}

export default {
  ...theme,
  Provider
}
