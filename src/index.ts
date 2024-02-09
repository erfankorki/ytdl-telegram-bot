import fs from "fs";
import ytdl from "ytdl-core";
import inquirer from "inquirer";

async function getURL() {
  const answers = await inquirer.prompt([
    {
      type: "text",
      name: "url",
      message: "please enter youtube URL",
    },
  ]);
  return answers.url;
}

(async function main() {
  const url = await getURL();
  const info = await ytdl.getInfo(url, {});
  ytdl
    .downloadFromInfo(info, {})
    .pipe(fs.createWriteStream("video.mp4"))
    .on("finish", function () {
      console.log("File Downloaded...");
    });
})();
