// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var styles = Css.style(/* :: */[
      Css.color(/* currentColor */292050538),
      /* :: */[
        Css.textDecoration(/* underline */131142924),
        /* :: */[
          Css.hover(/* :: */[
                Css.textDecoration(/* none */-922086728),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

function Link(Props) {
  var href = Props.href;
  var target = Props.target;
  var rel = Props.rel;
  var children = Props.children;
  var tmp = {
    className: styles,
    href: href
  };
  if (rel !== undefined) {
    tmp.rel = Caml_option.valFromOption(rel);
  }
  if (target !== undefined) {
    tmp.target = Caml_option.valFromOption(target);
  }
  return React.createElement("a", tmp, children);
}

var make = Link;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
