// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nprs$0.0.0/views/pages/parse/dashboard/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    index_template = marko_loadTemplate(require.resolve("../../layout/index.marko")),
    app_full_header_template = marko_loadTemplate(require.resolve("../../../components/app-full-header")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_full_header_tag = marko_loadTag(app_full_header_template),
    app_breadcrump_template = marko_loadTemplate(require.resolve("../../../components/app-breadcrump")),
    app_breadcrump_tag = marko_loadTag(app_breadcrump_template),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: index_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div><div class=\"sticky\">");

            app_full_header_tag({
                showbutton: false
              }, out, __component, "3");

            out.w("</div><div class=\"content app\">");

            app_breadcrump_tag({
                breadcrump: [
                    {
                        label: "Home",
                        link: "/"
                      },
                    {
                        label: "Parse",
                        link: "/pd/dashboard"
                      }
                  ]
              }, out, __component, "5");

            out.w("</div></div>");
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
    id: "/nprs$0.0.0/views/pages/parse/dashboard/index.marko",
    tags: [
      "../../layout/index.marko",
      "../../../components/app-full-header",
      "../../../components/app-breadcrump",
      "marko/src/taglibs/core/include-tag"
    ]
  };
