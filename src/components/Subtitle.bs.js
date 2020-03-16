// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$SimonKjellberg from "../Theme.bs.js";

var styles = Curry._1(Css.style, /* :: */[
      Css.color(Theme$SimonKjellberg.Color.muted),
      /* :: */[
        Css.fontWeight(/* normal */812216871),
        /* [] */0
      ]
    ]);

function Subtitle(Props) {
  var children = Props.children;
  return React.createElement("small", {
              className: styles
            }, children);
}

var make = Subtitle;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
