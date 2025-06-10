"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Stepper.module.css";

export function Stepper({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "imb-stepper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-stepper-step")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-tm")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-img-block-active")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-stepper-1")}
              width="8"
              height="8"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683e75c8d7f0f4f9036d68d8_user.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-text")}
            tag="div"
          >
            {"Eligibility"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "imb-stepper-step-block",
            "imb-stepper-step-active"
          )}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-stepper-step")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-tm")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-img-block")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-stepper-1")}
              width="8"
              height="8"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683eda2d146fb15c6a4e92f6_verify.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-text")}
            tag="div"
          >
            {"Verify ID"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-step-block")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "imb-stepper-step")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-tm")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-img-block")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-stepper-1")}
              width="30"
              height="30"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683edb5ca24df143183cbb3f_checklist.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-text")}
            tag="div"
          >
            {"Review"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-step-block")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "imb-stepper-step",
          "imb-stepper-step-last"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "imb-stepper-tm")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-img-block")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-stepper-1")}
              width="30"
              height="30"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/683edba57c2a079f88d101c1_done.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "imb-stepper-text")}
            tag="div"
          >
            {"Done"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
