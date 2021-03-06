// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nprs$0.0.0/views/components/app-full-header/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_logo_template = marko_loadTemplate(require.resolve("../app-logo")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_logo_tag = marko_loadTag(app_logo_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-atl-navigation-column stuck\"><div class=\"lia-quilt-column-alley lia-quilt-column-alley-single\"><div class=\"atl-navigation-wrapper full-width\"><div class=\"atl-navigation\"><div style=\"margin-bottom: 0px;\" class=\"atl-navigation__masthead padding0sm\"><a href=\"/\" data-ga-category=\"Utility Navigation Interactions\" data-ga-action=\"Atlassian Community Logo\" class=\"atl-community-logo\">");

  app_logo_tag({}, out, __component, "6");

  out.w("</a></div></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/nprs$0.0.0/views/components/app-full-header/index.marko",
    component: "./",
    tags: [
      "../app-logo"
    ]
  };
