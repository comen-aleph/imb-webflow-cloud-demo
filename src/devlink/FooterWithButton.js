"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FooterWithButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FooterWithButton({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-container")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "button-footer")}
          data-w-id="707f1e43-6812-f443-c83e-a793fdab49d7"
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Confirm"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
