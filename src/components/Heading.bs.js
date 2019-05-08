// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Theme$SimonKjellberg from "../Theme.bs.js";

var styles = Css.style(/* :: */[
      Css.position(/* relative */903134412),
      /* :: */[
        Css.marginTop(Css.em(1.0)),
        /* :: */[
          Css.marginBottom(Css.em(1.0)),
          /* :: */[
            Css.marginLeft(Css.ch(1.5)),
            /* :: */[
              Css.fontSize(Css.rem(1.0)),
              /* :: */[
                Css.fontWeight(/* bold */-1055161979),
                /* :: */[
                  Css.before(/* :: */[
                        Css.position(/* absolute */-1013592457),
                        /* :: */[
                          Css.left(Css.ch(-1.5)),
                          /* :: */[
                            Css.contentRule(">"),
                            /* :: */[
                              Css.color(Theme$SimonKjellberg.Color[/* muted */2]),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function Heading(Props) {
  var level = Props.level;
  var children = Props.children;
  if (level >= -656133553) {
    if (level >= -656133551) {
      if (level >= -656133550) {
        return React.createElement("h6", {
                    className: styles
                  }, children);
      } else {
        return React.createElement("h5", {
                    className: styles
                  }, children);
      }
    } else if (level >= -656133552) {
      return React.createElement("h4", {
                  className: styles
                }, children);
    } else {
      return React.createElement("h3", {
                  className: styles
                }, children);
    }
  } else if (level >= -656133554) {
    return React.createElement("h2", {
                className: styles
              }, children);
  } else {
    return React.createElement("h1", {
                className: styles
              }, children);
  }
}

var make = Heading;

var $$default = Heading;

var level1 = /* Level1 */-656133555;

var level2 = /* Level2 */-656133554;

var level3 = /* Level3 */-656133553;

var level4 = /* Level4 */-656133552;

var level5 = /* Level5 */-656133551;

var level6 = /* Level6 */-656133550;

export {
  styles ,
  make ,
  $$default ,
  $$default as default,
  level1 ,
  level2 ,
  level3 ,
  level4 ,
  level5 ,
  level6 ,
  
}
/* styles Not a pure module */
