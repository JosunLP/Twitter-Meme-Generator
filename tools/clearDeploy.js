var fs = require('fs')
var TARGET = "./dist"

// generate a nodejs function that deletes a directory and all its contents
function deleteDir(dir) {
  return function(cb) {
    fs.readdir(dir, function(err, files) {
      if (err) {
        return cb(err)
      }
      var count = files.length
      if (count == 0) {
        return fs.rmdir(dir, cb)
      }
      files.forEach(function(file) {
        file = dir + '/' + file
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            deleteDir(file)(function(err) {
              if (err) {
                return cb(err)
              }
              if (--count == 0) {
                fs.rmdir(dir, cb)
              }
            })
          } else {
            fs.unlink(file, function(err) {
              if (err) {
                return cb(err)
              }
              if (--count == 0) {
                fs.rmdir(dir, cb)
              }
            })
          }
        })
      })
    })
  }
}

deleteDir(TARGET)(function(err) {
  if (err) {
    console.log(err)
  }
})
