import { join } from 'path';
import { tmpdir } from 'os';
import { mkdtempSync, writeFile } from "fs";
import { exec } from "child_process";
import open from "open";

import { htmlOutputTemplate } from "./html-output-template/html-output-template.js";

export const htmlOutput = (reportJson) => {
  const html = htmlOutputTemplate(reportJson);

  const folder = mkdtempSync(join(tmpdir(), 'comp-usage-report-'));
  writeFile(join(folder, 'index.html'), html, 'utf-8', () => {
    exec(`./node_modules/.bin/http-server ${folder}`);
    open('http://localhost:8080');
  });


}
