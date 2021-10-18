import { exec } from "child_process";
import { resolve } from "path"


export const getTargetFiles = (targetPath, importPattern) => {
  const command = `grep -rnw '${resolve(targetPath)}' -e '${importPattern}' -l`;

  return new Promise((res, rej) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        rej(err);
        return;
      } 
      if (stderr) {
        rej(stderr);
        return;
      } 

      res(stdout.split('\n'))
    })
  })
}
