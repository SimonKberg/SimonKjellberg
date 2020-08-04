// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonReact from "reason-react/src/legacy/ReasonReact.bs.js";
import * as ReasonReactCompat from "reason-react/src/legacy/ReasonReactCompat.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";

var styles = Curry._1(Css.style, {
      hd: Css.listStyleType("none"),
      tl: {
        hd: Css.padding(Css.zero),
        tl: {
          hd: Css.marginTop(Css.em(1.0)),
          tl: {
            hd: Css.marginBottom(Css.em(1.0)),
            tl: {
              hd: Css.marginLeft(Css.ch(1.5)),
              tl: /* [] */0
            }
          }
        }
      }
    });

function UnorderedList(Props) {
  var classNameOpt = Props.className;
  var innerRef = Props.innerRef;
  var children = Props.children;
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var tmp = {
    className: Utils$SimonKjellberg.cn({
          hd: styles,
          tl: {
            hd: className,
            tl: /* [] */0
          }
        })
  };
  if (innerRef !== undefined) {
    tmp.ref = Caml_option.valFromOption(innerRef);
  }
  return React.createElement("ul", tmp, children);
}

var component = ReasonReact.statelessComponent("UnorderedList-SimonKjellberg");

function make(className, innerRef, children) {
  var tmp = {
    children: children
  };
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  if (innerRef !== undefined) {
    tmp.innerRef = Caml_option.valFromOption(innerRef);
  }
  return ReasonReactCompat.wrapReactForReasonReact(UnorderedList, tmp, children);
}

var Jsx2 = {
  component: component,
  make: make
};

var make$1 = UnorderedList;

var $$default = UnorderedList;

export {
  styles ,
  make$1 as make,
  $$default ,
  $$default as default,
  Jsx2 ,
  
}
/* styles Not a pure module */
