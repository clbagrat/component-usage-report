import * as walker from 'acorn-walk';
import { extend } from 'acorn-jsx-walk';

extend(walker.base);

export const walk = (tree, importPattern) => {
  let targets = [];
  let result = {};
  walker.simple(tree, {
    ImportDeclaration(node) {
      if (node.source.value === importPattern) {
        targets = targets.concat(
          node.specifiers.map((node) => ({
            imported: node.imported.name,
            local: node.local.name,
          }))
        );
      }
    },
    JSXElement(node) {
      if (targets.some(({ local }) => local === node.openingElement.name.name)) {
        const name = node.openingElement.name.name;
        result[name] = result[name] || { props: {}, usages: 0};
        result[name].usages += 1;
        if (node.children && node.children.length) {
          result[name].props.children = [true];
        } 
        node.openingElement.attributes.forEach(el => {
          if (!el.name) {
            result[name].props["?"] = [true]
            return;
          }
          result[name].props[el.name.name] = result[name].props[el.name.name] || []
          if (el.value) {
            if (el.value.value) {
              result[name].props[el.name.name].push(el.value.value);
            }
            if (el.value.expression) {
              result[name].props[el.name.name].push(
                el.value.expression.value || el.value.expression.type
              );
            }
          }
          if (el.value === null) {
            result[name].props[el.name.name].push(true);
          }
        });
      }
    },
  });

  return result
};
