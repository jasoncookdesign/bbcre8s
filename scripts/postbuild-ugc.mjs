import { mkdirSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const distDir = resolve("dist");
const ugcDir = join(distDir, "ugc");

rmSync(ugcDir, { recursive: true, force: true });
mkdirSync(ugcDir, { recursive: true });

for (const entry of readdirSync(distDir)) {
  if (entry === "ugc") continue;

  renameSync(join(distDir, entry), join(ugcDir, entry));
}

writeFileSync(
  join(distDir, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=./ugc/index.html" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Redirecting…</title>
    <script>
      window.location.replace("./ugc/index.html");
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="./ugc/index.html">./ugc/index.html</a>…</p>
  </body>
</html>
`
);
