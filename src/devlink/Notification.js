"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Notification.module.css";

export function Notification({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "notification-container")}
      tag="div"
      data-figma-id="8003:2317"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "notification-body")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-body-icon")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-3")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68467f7368dfd6d44e4a41fa/6847072c9567cd6fa6e1207c_warning.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "notification-body-text")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "the-link-in-the-sms-will-remain-active-for-the-next-72-hours"
            )}
            data-figma-id="231:2094"
          >
            {"The link in the SMS will remain active for the next 72 hours."}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
