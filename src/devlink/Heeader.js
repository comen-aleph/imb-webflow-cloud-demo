"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Heeader.module.css";

export function Heeader({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "header")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.NavbarContainer
          className={_utils.cx(_styles, "container-2")}
          tag="div"
        >
          <_Builtin.Link
            button={false}
            block="inline"
            options={{
              href: "https://www.imb.com.au/",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "header-logo")}
              editable={true}
              loading="auto"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/68467f7368dfd6d44e4a41fa/6846a7acb3e580824a0671ec_Logo.svg"
            />
          </_Builtin.Link>
        </_Builtin.NavbarContainer>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
