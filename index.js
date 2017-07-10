const temp = require('temp').track();
const	download = require('download');
const dominantColor = require('dominant-color');

module.exports = {
  getDominantColor: url => {
    return new Promise((resolve, reject) => {
      const stream = temp.createWriteStream();
      download(url)
        .then(data => {
          stream.write(data);
          stream.end();
          dominantColor(stream.path, (err, c) => {
            if (err) {
              reject(err);
            }
            resolve({dColor: c});
          });
        })
        .catch(err => reject(err));
    });
  }
};
