const dotenv = require("dotenv");

function main() {
  dotenv.config();
  console.log(process.env.API_TOKEN + "ALI");
}

main();
