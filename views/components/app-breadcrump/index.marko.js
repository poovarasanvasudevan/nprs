// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nprs$0.0.0/views/components/app-breadcrump/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"breadcrump123 lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-atl-message-view-pre\"><div class=\"lia-quilt-column-alley lia-quilt-column-alley-single\"><div class=\"atl-breadcrumbs\"><ul class=\"lia-list-standard-inline\">");

  var for__4 = 0;

  marko_forEach(input.breadcrump, function(breadcrump) {
    var keyscope__5 = "[" + ((for__4++) + "]");

    out.w("<li class=\"atl-breadcrumbs__crumb\"><a href=\"" +
      marko_escapeXmlAttr(breadcrump.link) +
      "\">" +
      marko_escapeXml(breadcrump.label) +
      "</a></li>");
  });

  out.w("</ul></div></div></div>");
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
    id: "/nprs$0.0.0/views/components/app-breadcrump/index.marko"
  };
