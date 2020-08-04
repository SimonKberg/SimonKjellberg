// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Head from "next/head";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";
import * as Header$SimonKjellberg from "./Header.bs.js";

var wrapper = Curry._1(Css.style, {
      hd: Css.fontSize(Css.pct(100.0)),
      tl: {
        hd: Css.lineHeight({
              NAME: "abs",
              VAL: 1.5
            }),
        tl: {
          hd: Css.fontFamilies({
                hd: {
                  NAME: "custom",
                  VAL: "Iosevka"
                },
                tl: {
                  hd: "monospace",
                  tl: /* [] */0
                }
              }),
          tl: {
            hd: Css.color(Theme$SimonKjellberg.Color.primary),
            tl: /* [] */0
          }
        }
      }
    });

var content = Curry._1(Css.style, {
      hd: Css.margin2("zero", "auto"),
      tl: {
        hd: Css.maxWidth(Theme$SimonKjellberg.Page.maxWidth),
        tl: {
          hd: Css.padding3("zero", Css.rem(0.9375), Css.rem(1.875)),
          tl: {
            hd: Css.unsafe("@supports(padding: max(0px)) and (padding: env(safe-area-inset-bottom))", Curry._1(Css.style, {
                      hd: Css.unsafe("paddingLeft", "max(env(safe-area-inset-left), 0.9375rem)"),
                      tl: {
                        hd: Css.unsafe("paddingRight", "max(env(safe-area-inset-right), 0.9375rem)"),
                        tl: {
                          hd: Css.unsafe("paddingBottom", "max(env(safe-area-inset-bottom), 1.875rem)"),
                          tl: /* [] */0
                        }
                      }
                    })),
            tl: /* [] */0
          }
        }
      }
    });

var Styles = {
  wrapper: wrapper,
  content: content
};

function Page(Props) {
  var siteTitleOpt = Props.siteTitle;
  var siteDescriptionOpt = Props.siteDescription;
  var children = Props.children;
  var siteTitle = siteTitleOpt !== undefined ? siteTitleOpt : "Simon Kjellberg";
  var siteDescription = siteDescriptionOpt !== undefined ? siteDescriptionOpt : "";
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
