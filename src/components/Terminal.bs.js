// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Screenfull from "screenfull";
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
                  Css.backgroundColor(Theme$SimonKjellberg.Terminal.$$Window.backgroundColor),
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
      Css.backgroundColor(Theme$SimonKjellberg.Terminal.Topbar.backgroundColor),
      /* :: */[
        Css.height(Theme$SimonKjellberg.Terminal.Topbar.height),
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
              Css.backgroundColor(Theme$SimonKjellberg.Terminal.Controls.Close.backgroundColor),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal.Controls.Close.backgroundColor)),
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
              Css.backgroundColor(Theme$SimonKjellberg.Terminal.Controls.Minimize.backgroundColor),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal.Controls.Minimize.backgroundColor)),
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
              Css.backgroundColor(Theme$SimonKjellberg.Terminal.Controls.Maximize.backgroundColor),
              /* :: */[
                Css.focus(/* :: */[
                      Css.borderColor(Polished$SimonKjellberg.darken(0.15, Theme$SimonKjellberg.Terminal.Controls.Maximize.backgroundColor)),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var windowContentFullscreen_000 = Css.maxHeight(Css.Calc.$neg(Css.vh(100), Theme$SimonKjellberg.Terminal.Topbar.height));

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
            Css.color(Theme$SimonKjellberg.Terminal.Content.color),
            /* :: */[
              Css.maxHeight(Theme$SimonKjellberg.Terminal.Content.maxHeight),
              /* :: */[
                Css.margin2(/* zero */-789508312, Css.rem(0.625)),
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

var Styles = {
  windowFullscreen: windowFullscreen,
  $$window: $$window,
  windowTopbar: windowTopbar,
  windowControl: windowControl,
  windowControlClose: windowControlClose,
  windowControlMinimize: windowControlMinimize,
  windowControlMaximize: windowControlMaximize,
  windowContentFullscreen: windowContentFullscreen,
  windowContent: windowContent
};

function Terminal(Props) {
  var children = Props.children;
  var windowRef = React.useRef(null);
  var handleClickMaximize = React.useCallback((function (param) {
          if (Screenfull.isEnabled) {
            var match = windowRef.current;
            if (match == null) {
              return /* () */0;
            } else {
              Screenfull.toggle(match);
              return /* () */0;
            }
          } else {
            return 0;
          }
        }), [windowRef]);
  return React.createElement("div", {
              ref: windowRef,
              className: $$window
            }, React.createElement("div", {
                  className: windowTopbar
                }, React.createElement("button", {
                      className: windowControlClose
                    }), React.createElement("button", {
                      className: windowControlMinimize
                    }), React.createElement("button", {
                      className: windowControlMaximize,
                      onClick: handleClickMaximize
                    })), React.createElement("div", {
                  className: windowContent
                }, children));
}

var make = Terminal;

var $$default = Terminal;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* windowFullscreen Not a pure module */
