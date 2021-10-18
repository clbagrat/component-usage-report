# component usage report (WIP)

This is a tool for generating a report about usages of your component library in third-party repo.

![Demo](demo.gif)

It has no binary yet, so if you want to try it out, please fill .env with related vars.

```
TARGET=../folder/with/source/code/of/third-party/repo (please try to exclude node_modules, coz I forgot :D)
IMPORT_PATH="name-of-your-package"; (import { Card } from "name-of-your-package")
```


