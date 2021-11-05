var fs = require('fs')
var path = require('path')
let entry = "./src/assets"
let output = "./dist/assets"

function copyFolderRecursiveSync(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyFolderRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.linkSync(src, dest);
  }
}

copyFolderRecursiveSync(entry, output);