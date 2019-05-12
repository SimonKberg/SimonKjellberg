// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Head from "next/head";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";
import * as Header$SimonKjellberg from "./Header.bs.js";

var wrapper = Css.style(/* :: */[
      Css.fontSize(Css.pct(100.0)),
      /* :: */[
        Css.lineHeight(/* `abs */[
              4845682,
              1.5
            ]),
        /* :: */[
          Css.fontFamily("Iosevka, monospace"),
          /* :: */[
            Css.color(Theme$SimonKjellberg.Color[/* primary */0]),
            /* [] */0
          ]
        ]
      ]
    ]);

var content = Css.style(/* :: */[
      Css.margin2(/* zero */-789508312, /* auto */-1065951377),
      /* :: */[
        Css.maxWidth(Theme$SimonKjellberg.Page[/* maxWidth */0]),
        /* :: */[
          Css.padding3(/* zero */-789508312, Css.rem(0.9375), Css.rem(1.875)),
          /* :: */[
            Css.unsafe("@supports(padding: max(0px)) and (padding: env(safe-area-inset-bottom))", Css.style(/* :: */[
                      Css.unsafe("padding-left", "max(env(safe-area-inset-left), 0.9375rem)"),
                      /* :: */[
                        Css.unsafe("padding-right", "max(env(safe-area-inset-right), 0.9375rem)"),
                        /* :: */[
                          Css.unsafe("padding-bottom", "max(env(safe-area-inset-bottom), 1.875rem)"),
                          /* [] */0
                        ]
                      ]
                    ])),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* wrapper */wrapper,
  /* content */content
];

function Page(Props) {
  var match = Props.siteTitle;
  var siteTitle = match !== undefined ? match : "Simon Kjellberg";
  var match$1 = Props.siteDescription;
  var siteDescription = match$1 !== undefined ? match$1 : "";
  var children = Props.children;
  return React.createElement("div", {
              className: wrapper
            }, React.createElement(Head.default, {
                  children: null
                }, React.createElement("title", undefined, Utils$SimonKjellberg.str(siteTitle)), React.createElement("meta", {
                      content: siteTitle,
                      property: "og:title"
                    }), React.createElement("meta", {
                      content: siteDescription,
                      name: "description",
                      property: "og:description"
                    })), React.createElement(Header$SimonKjellberg.make, {
                  siteTitle: siteTitle
                }), React.createElement("div", {
                  className: content
                }, children));
}

var make = Page;

var $$default = Page;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* wrapper Not a pure module */
