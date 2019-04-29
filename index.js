const fs = require("fs");
const path = "logs.txt";
fs.readFile(path, "UTF-8", function(err, data) {
  if (err) throw "cant read file";
  const filter = line => (!line.includes("console") && `${line} \n`) || "\n";
  const newData = data.split("\n");
  const lines = newData.map(filter);
  //   const result = data.replace(/console\.log/g, "");
  fs.writeFile(path, lines.join(""), "UTF-8", function(err) {
    if (err) {
      return console.log(err);
    }
  });
});
