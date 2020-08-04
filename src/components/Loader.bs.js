// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var bounce = Curry._1(Css.keyframes, {
      hd: [
        0,
        {
          hd: Css.transform(Css.scale(0.0, 0.0)),
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          40,
          {
            hd: Css.transform(Css.scale(1.0, 1.0)),
            tl: /* [] */0
          }
        ],
        tl: {
          hd: [
            80,
            {
              hd: Css.transform(Css.scale(0.0, 0.0)),
              tl: /* [] */0
            }
          ],
          tl: {
            hd: [
              100,
              {
                hd: Css.transform(Css.scale(0.0, 0.0)),
                tl: /* [] */0
              }
            ],
            tl: /* [] */0
          }
        }
      }
    });

var container = Curry._1(Css.style, {
      hd: Css.position("relative"),
      tl: {
        hd: Css.display("block"),
        tl: {
          hd: Css.marginBottom(Css.rem(1.0)),
          tl: {
            hd: Css.textAlign("left"),
            tl: /* [] */0
          }
        }
      }
    });

var point = Curry._1(Css.style, {
      hd: Css.display("inlineBlock"),
      tl: {
        hd: Css.width(Css.ch(1.0)),
        tl: {
          hd: Css.height(Css.ch(1.0)),
          tl: {
            hd: Css.marginRight(Css.ch(0.75)),
            tl: {
              hd: Css.borderRadius(Css.pct(100.0)),
              tl: {
                hd: Css.backgroundColor("currentColor"),
                tl: {
                  hd: Css.unsafe("willChange", "transform"),
                  tl: {
                    hd: Css.animation(1400, undefined, undefined, "easeInOut", "both", undefined, "infinite", bounce),
                    tl: /* [] */0
                  }
                }
              }
            }
          }
        }
      }
    });

var point1 = Curry._1(Css.merge, {
      hd: point,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.animationDelay(-320),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

var point2 = Curry._1(Css.merge, {
      hd: point,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.animationDelay(-160),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

var point3 = Curry._1(Css.merge, {
      hd: point,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.animationDelay(0),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

var Styles = {
  bounce: bounce,
  container: container,
  point: point,
  point1: point1,
  point2: point2,
  point3: point3
};

function Loader(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement("span", {
                  className: point1
                }), React.createElement("span", {
                  className: point2
                }), React.createElement("span", {
                  className: point3
                }));
}

var make = Loader;

var $$default = Loader;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* bounce Not a pure module */
