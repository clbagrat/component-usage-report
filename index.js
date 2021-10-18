import { readFileSync } from "fs";
import { Parser } from "acorn";
import jsx from "acorn-jsx";
import argsParser from "args-parser";

import { getTargetFiles } from "./getTargetFiles.js";
import { walk } from "./walk.js";

import { htmlOutput } from "./outputs/html-output.js";

const { TARGET, IMPORT_PATH } = process.env;

const parser = Parser.extend(jsx());
const { outputFormat = "html" } = argsParser(process.argv);

const outputsPerFormat = {
  "html": htmlOutput
};

(async function () {
  const names = await getTargetFiles(TARGET, IMPORT_PATH); 
  const result = {};
  names.forEach(name => {
    if (!name) return;
    const tree = parser.parse(readFileSync(name, 'UTF-8'), {
      ecmaVersion: 2020,
      sourceType: "module"
    });

    let a = walk(tree, IMPORT_PATH);
    Object.entries(a).forEach(([component, {usages, props}]) => {
      result[component] = result[component] || {props: {}, usages: 0};
      result[component].usages += usages; 
      Object.entries(props).forEach(([propName, values]) => {
        result[component].props[propName] = result[component].props[propName] || [];
        result[component].props[propName] =
          result[component].props[propName].concat(values);
      });
    })

  });

  outputsPerFormat[outputFormat](result);
})()



