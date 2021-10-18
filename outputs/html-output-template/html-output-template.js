export const htmlOutputTemplate = (reportJson) => {
  return `
<html>
  <head>
    <script>
      REPORT = ${JSON.stringify(reportJson)} 
    </script>
  </head>
  <body>
    <div id="main">
        
    </div>
    <script>
       let html = "";
       Object.entries(REPORT).forEach(([component, {props, usages}]) => {
        html += \`
<details>
    <summary>\${component} - \${usages}</summary>
    <pre>\${JSON.stringify(props, null, 2)}</pre>
</details>
        \`
       })

        document.querySelector('#main').innerHTML = html;
    </script>
  </body>
</html>

  `
}
