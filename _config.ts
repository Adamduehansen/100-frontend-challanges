import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site.use(jsx());

site.copy("styles");

export default site;
