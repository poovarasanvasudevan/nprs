// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nprs$0.0.0/views/pages/landing/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    index_template = marko_loadTemplate(require.resolve("../layout/index.marko")),
    app_header_template = marko_loadTemplate(require.resolve("../../components/app-header")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_header_tag = marko_loadTag(app_header_template),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: index_template,
      body: {
          renderBody: function renderBody(out) {
            app_header_tag({
                showbutton: true
              }, out, __component, "2");
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
    id: "/nprs$0.0.0/views/pages/landing/index.marko",
    tags: [
      "../layout/index.marko",
      "../../components/app-header",
      "marko/src/taglibs/core/include-tag"
    ]
  };
