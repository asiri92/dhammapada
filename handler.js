'use strict';

const readFromDatabase = require('./readFromDatabase');
const getImageFromQuote = require('./getImageFromQuote');
const postToBuffer = require('./postToBuffer');

module.exports.publish = async (event, context) => {
  var quote = await readFromDatabase();
  console.log('quote : ' + quote);
  var imageUrl = await getImageFromQuote(quote);
  var bufferResponse = await postToBuffer(quote,imageUrl);
  console.log('ritekit image url : ' + imageUrl);
  console.log('buffer final Response : ' + bufferResponse);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'buffer final Response :' + bufferResponse + ' ritekit image url : ' + imageUrl,
      input: event,
    }),
  };
};