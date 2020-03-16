// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";

var user = Curry._1(Css.style, /* :: */[
      Css.fontWeight(/* bold */-1055161979),
      /* [] */0
    ]);

var message = Curry._1(Css.style, /* :: */[
      Css.display(/* inline */423610969),
      /* :: */[
        Css.selector("code", /* :: */[
              Css.padding2(Css.em(0.1), Css.em(0.2)),
              /* :: */[
                Css.fontSize(Css.em(0.8)),
                /* :: */[
                  Css.color(Theme$SimonKjellberg.Code.Color.inline),
                  /* :: */[
                    Css.backgroundColor(Theme$SimonKjellberg.Code.backgroundColor),
                    /* :: */[
                      Css.border(Css.px(1), /* solid */12956715, Theme$SimonKjellberg.Code.borderColor),
                      /* :: */[
                        Css.borderRadius(Css.em(0.2)),
                        /* :: */[
                          Css.verticalAlign(/* textBottom */476669816),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]),
        /* :: */[
          Css.selector("pre", /* :: */[
                Css.padding(Css.em(0.5)),
                /* :: */[
                  Css.margin2(Css.em(0.5), /* zero */-789508312),
                  /* :: */[
                    Css.backgroundColor(Theme$SimonKjellberg.Code.backgroundColor),
                    /* :: */[
                      Css.border(Css.px(1), /* solid */12956715, Theme$SimonKjellberg.Code.borderColor),
                      /* :: */[
                        Css.borderRadius(Css.em(0.2)),
                        /* :: */[
                          Css.lineHeight(Css.em(1.0)),
                          /* :: */[
                            Css.selector("> code", /* :: */[
                                  Css.color(Theme$SimonKjellberg.Code.Color.block),
                                  /* :: */[
                                    Css.padding(/* zero */-789508312),
                                    /* :: */[
                                      Css.borderWidth(/* zero */-789508312),
                                      /* [] */0
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
              ]),
          /* :: */[
            Css.selector("blockquote", /* :: */[
                  Css.margin(/* zero */-789508312),
                  /* :: */[
                    Css.paddingLeft(Css.ch(1.0)),
                    /* :: */[
                      Css.borderLeft(Css.ch(0.5), /* solid */12956715, Theme$SimonKjellberg.Quote.borderColor),
                      /* [] */0
                    ]
                  ]
                ]),
            /* :: */[
              Css.selector("a", /* :: */[
                    Css.color(Theme$SimonKjellberg.Color.muted),
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
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var editedLabel = Curry._1(Css.style, /* :: */[
      Css.color(Theme$SimonKjellberg.Color.muted),
      /* [] */0
    ]);

var Styles = {
  user: user,
  message: message,
  editedLabel: editedLabel
};

function ChatMessage(Props) {
  var user$1 = Props.user;
  var text = Props.text;
  var editedOpt = Props.edited;
  var edited = editedOpt !== undefined ? editedOpt : false;
  return React.createElement(React.Fragment, undefined, React.createElement("span", {
                  className: user,
                  style: {
                    color: "#" + user$1.color
                  }
                }, Utils$SimonKjellberg.str(user$1.name + ": ")), React.createElement("div", {
                  className: message,
                  dangerouslySetInnerHTML: {
                    __html: text
                  }
                }), edited ? React.createElement("small", {
                    className: editedLabel
                  }, Utils$SimonKjellberg.str(" (edited) ")) : null);
}

var make = ChatMessage;

var $$default = ChatMessage;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* user Not a pure module */
