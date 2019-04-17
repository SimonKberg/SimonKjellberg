// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as Screenfull from "screenfull";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Polished$SimonKjellberg from "../bindings/Polished.bs.js";

var windowFullscreen_000 = Css.height(Css.pct(100.0));

var windowFullscreen_001 = /* :: */[
  Css.margin(/* zero */-789508312),
  /* [] */0
];

var windowFullscreen = /* :: */[
  windowFullscreen_000,
  windowFullscreen_001
];

var $$window = Css.style(/* :: */[
      Css.position(/* relative */903134412),
      /* :: */[
        Css.display(/* flex */-1010954439),
        /* :: */[
          Css.flexDirection(/* column */-963948842),
          /* :: */[
            Css.margin2(Css.em(1.0), /* auto */-1065951377),
            /* :: */[
              Css.width(Css.pct(100.0)),
              /* :: */[
                Css.borderRadius(Css.rem(0.625)),
                /* :: */[
                  Css.backgroundColor(Theme$SimonKjellberg.Terminal[/* Window */0][/* backgroundColor */0]),
                  /* :: */[
                    Css.selector("&:fullscreen", windowFullscreen),
                    /* :: */[
                      Css.selector("&:-ms-fullscreen", windowFullscreen),
                      /* :: */[
                        Css.selector("&:-moz-full-screen", windowFullscreen),
                        /* :: */[
                          Css.selector("&:-webkit-full-screen", windowFullscreen),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var windowTopbar = Css.style(/* :: */[
      Css.backgroundColor(Theme$SimonKjellberg.Terminal[/* Topbar */1][/* backgroundColor */0]),
      /* :: */[
        Css.height(Theme$SimonKjellberg.Terminal[/* Topbar */1][/* height */1]),
        /* :: */[
          Css.borderTopLeftRadius(Css.rem(0.5)),
          /* :: */[
            Css.borderTopRightRadius(Css.rem(0.5)),
            /* :: */[
              Css.padding2(/* zero */-789508312, Css.rem(0.625)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var windowControl = Css.style(/* :: */[
      Css.display(/* inlineBlock */-147785676),
      /* :: */[
        Css.width(Css.rem(0.75)),
        /* :: */[
          Css.height(Css.rem(0.75)),
          /* :: */[
            Css.padding(/* zero */-789508312),
            /* :: */[
              Css.marginTop(Css.rem(0.625)),
              /* :: */[
                Css.marginRight(Css.rem(0.25)),
                /* :: */[
                  Css.borderRadius(Css.rem(0.5)),
                  /* :: */[
                    Css.border(Css.px(1), /* solid */12956715, /* transparent */582626130),
                    /* :: */[
                      Css.focus(/* :: */[
                            Css.outlineStyle(/* none */-922086728),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var windowControlClose = Css.merge(/* :: */[
      windowControl,
      /* :: */[
        Css.style(/* :: */[
              Css.backgroundColor(Theme$SimonKjellberg.Terminal[/* Controls */2][/* Close */0][/* backgroundColor */0]),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal[/* Controls */2][/* Close */0][/* backgroundColor */0])),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var windowControlMinimize = Css.merge(/* :: */[
      windowControl,
      /* :: */[
        Css.style(/* :: */[
              Css.backgroundColor(Theme$SimonKjellberg.Terminal[/* Controls */2][/* Minimize */1][/* backgroundColor */0]),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal[/* Controls */2][/* Minimize */1][/* backgroundColor */0])),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var windowControlMaximize = Css.merge(/* :: */[
      windowControl,
      /* :: */[
        Css.style(/* :: */[
              Css.backgroundColor(Theme$SimonKjellberg.Terminal[/* Controls */2][/* Maximize */2][/* backgroundColor */0]),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal[/* Controls */2][/* Maximize */2][/* backgroundColor */0])),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var windowContentFullscreen_000 = Css.maxHeight(/* none */-922086728);

var windowContentFullscreen = /* :: */[
  windowContentFullscreen_000,
  /* [] */0
];

var windowContent = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(/* column */-963948842),
        /* :: */[
          Css.position(/* relative */903134412),
          /* :: */[
            Css.color(Theme$SimonKjellberg.Terminal[/* Content */3][/* color */0]),
            /* :: */[
              Css.maxHeight(Theme$SimonKjellberg.Terminal[/* Content */3][/* maxHeight */1]),
              /* :: */[
                Css.margin2(/* zero */-789508312, Css.rem(1.25)),
                /* :: */[
                  Css.selector("." + ($$window + ":fullscreen &"), windowContentFullscreen),
                  /* :: */[
                    Css.selector("." + ($$window + ":-ms-fullscreen &"), windowContentFullscreen),
                    /* :: */[
                      Css.selector("." + ($$window + ":-moz-full-screen &"), windowContentFullscreen),
                      /* :: */[
                        Css.selector("." + ($$window + ":-webkit-full-screen &"), windowContentFullscreen),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* windowFullscreen */windowFullscreen,
  /* window */$$window,
  /* windowTopbar */windowTopbar,
  /* windowControl */windowControl,
  /* windowControlClose */windowControlClose,
  /* windowControlMinimize */windowControlMinimize,
  /* windowControlMaximize */windowControlMaximize,
  /* windowContentFullscreen */windowContentFullscreen,
  /* windowContent */windowContent
];

function setWindowRef(windowRef, param) {
  param[/* state */1][/* windowRef */0][0] = (windowRef == null) ? undefined : Caml_option.some(windowRef);
  return /* () */0;
}

function handleClickMaximize(_event, param) {
  if (Screenfull.enabled) {
    var match = param[/* state */1][/* windowRef */0][0];
    if (match !== undefined) {
      Screenfull.toggle(Caml_option.valFromOption(match));
      return /* () */0;
    } else {
      return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

var component = ReasonReact.reducerComponent("Subtitle");

function make(children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          ref: Curry._1(self[/* handle */0], setWindowRef),
                          className: $$window
                        }, React.createElement("div", {
                              className: windowTopbar
                            }, React.createElement("button", {
                                  className: windowControlClose
                                }), React.createElement("button", {
                                  className: windowControlMinimize
                                }), React.createElement("button", {
                                  className: windowControlMaximize,
                                  onClick: Curry._1(self[/* handle */0], handleClickMaximize)
                                })), ReactDOMRe.createElementVariadic("div", {
                              className: windowContent
                            }, children));
            }),
          /* initialState */(function (param) {
              return /* record */[/* windowRef : record */[/* contents */undefined]];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _state) {
              return /* NoUpdate */0;
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children);
      }));

export {
  Styles ,
  setWindowRef ,
  handleClickMaximize ,
  component ,
  make ,
  $$default ,
  $$default as default,
  
}
/* windowFullscreen Not a pure module */
