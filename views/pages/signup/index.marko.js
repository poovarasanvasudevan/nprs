// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nprs$0.0.0/views/pages/signup/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    index_template = marko_loadTemplate(require.resolve("../layout/index.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: index_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"col-md-12 full-height\"><div class=\"row full-height\"><div class=\"col-md-8 border-right\"></div><div class=\"col-md-4 padding30\"><div class=\"row\"><div class=\"col-md-10 col-md-offset-1\"><form class=\"padding30\" id=\"loginform\"><div class=\"ak-field-group\"><label for=\"username\">Username</label><input type=\"text\" class=\"ak-field-text ak-field__size-medium txt-full-width\" id=\"username\" name=\"username\" placeholder=\"eg. you@yourcompany.com\"></div><div class=\"ak-field-group\"><label for=\"password\">Password</label><input type=\"password\" class=\"ak-field-password ak-field__size-medium txt-full-width\" id=\"password\" name=\"password\"></div><div class=\"ak-field-group\"><div class=\"row\"><div class=\"ak-field-checkbox col-md-8\"><input type=\"checkbox\" name=\"option1\" id=\"option1\" value=\"option1\"><label for=\"option1\">Keep me logged in</label></div><div class=\"col-md-4\"><button class=\"ak-button ak-button__appearance-primary float-right\">Log in</button></div></div></div></form></div></div></div></div></div>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/nprs$0.0.0/views/pages/signup/index.marko",
    tags: [
      "../layout/index.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
