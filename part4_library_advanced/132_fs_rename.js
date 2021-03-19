const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
  fs.rename(fromFilePathName, toFilePathName, (err) => {
    if (err) console.log(`ERROR: ${err}`);
  });
};

const fromFilePathName = 'part4_library_advanced/hello.txt';
const toFilePathName = 'part4_library_advanced/bye.txt';

renameFile(fromFilePathName, toFilePathName);
