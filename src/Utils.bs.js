// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function str(prim) {
  return prim;
}

function dangerousHtml(html) {
  return {
          __html: html
        };
}

function forwardDOMRef(fn) {
  return React.forwardRef(function (props, ref_) {
              return Curry._2(fn, props, Belt_Option.map((ref_ == null) ? undefined : Caml_option.some(ref_), (function (prim) {
                                return prim;
                              })));
            });
}

function $great$great$eq(value, fn) {
  if (value !== undefined) {
    return Curry._1(fn, Caml_option.valFromOption(value));
  }
  
}

function $pipe$question(value, $$default) {
  if (value !== undefined) {
    return Caml_option.valFromOption(value);
  } else {
    return $$default;
  }
}

function cn(cns) {
  return $$String.concat(" ", Belt_List.keep(cns, (function (x) {
                    return x !== "";
                  })));
}

function rgb_of_string(s) {
  var re = s.match(/^rgb\((\d+), ?(\d+), ?(\d+)\)/);
  if (re !== null) {
    return Css.rgb(Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 1)), Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 2)), Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 3)));
  } else {
    return Js_exn.raiseError("Invalid formatted value");
  }
}

function rgba_of_string(s) {
  var re = s.match(/^rgba\((\d+), ?(\d+), ?(\d+), ?([\d.]+)\)/);
  if (re !== null) {
    return Css.rgba(Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 1)), Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 2)), Caml_format.caml_int_of_string(Caml_array.caml_array_get(re, 3)), {
                NAME: "num",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 4))
              });
  } else {
    return Js_exn.raiseError("Invalid formatted value");
  }
}

function hsl_of_string(s) {
  var re = s.match(/^hsl\((\d+), ?(\d+)%, ?(\d+)%\)/);
  if (re !== null) {
    return Css.hsl({
                NAME: "deg",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 1))
              }, {
                NAME: "percent",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 2))
              }, {
                NAME: "percent",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 3))
              });
  } else {
    return Js_exn.raiseError("Invalid formatted value");
  }
}

function hsla_of_string(s) {
  var re = s.match(/^hsl\((\d+), ?(\d+)%, ?(\d+)%, ?([\d.]+)\)/);
  if (re !== null) {
    return Css.hsla({
                NAME: "deg",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 1))
              }, {
                NAME: "percent",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 2))
              }, {
                NAME: "percent",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 3))
              }, {
                NAME: "percent",
                VAL: Caml_format.caml_float_of_string(Caml_array.caml_array_get(re, 4))
              });
  } else {
    return Js_exn.raiseError("Invalid formatted value");
  }
}

function color_of_string(s) {
  if (s.startsWith("rgb(")) {
    return rgb_of_string(s);
  } else if (s.startsWith("rgba(") || s.startsWith("rgba(")) {
    return rgba_of_string(s);
  } else if (s.startsWith("#")) {
    return Css.hex(s.slice(1));
  } else if (s === "transparent") {
    return Css.transparent;
  } else if (s === "currentColor") {
    return Css.currentColor;
  } else {
    return Js_exn.raiseError("Invalid value");
  }
}

export {
  str ,
  dangerousHtml ,
  forwardDOMRef ,
  $great$great$eq ,
  $pipe$question ,
  cn ,
  rgb_of_string ,
  rgba_of_string ,
  hsl_of_string ,
  hsla_of_string ,
  color_of_string ,
  
}
/* Css Not a pure module */
