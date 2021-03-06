var Bacon = require('baconjs');
var config = require('./config.js');

var ROWS = config.ROWS;
var COLS = config.COLS;
var MARGIN = config.MARGIN;

function getDimensions(rect) {
  var result = {
    squareLength: 0,
    width: 0,
    height: 0,
    widthPadding: 0,
    fontSize: 0,
    outter: rect,
    textPosition: {
      x: 0,
      y: 0
    }
  };

  var gameWidth = (COLS + MARGIN.LEFT + MARGIN.RIGHT);
  var gameHeight = (ROWS + MARGIN.TOP + MARGIN.BOTTOM);

  var gameProportions = gameWidth / gameHeight;
  var windowProportions = rect.width / rect.height;

  if (gameProportions > windowProportions) {
    result.squareLength = rect.width / gameWidth;
    result.widthPadding = 0;
  } else {
    result.squareLength = rect.height / gameHeight;
    result.widthPadding = (rect.width - (result.squareLength * gameWidth)) / 2;
  }

  result.width = gameWidth * result.squareLength;
  result.height = gameHeight * result.squareLength;
  result.fontSize = (MARGIN.BOTTOM * result.squareLength) / 2;
  result.textPosition.x =
    result.widthPadding + (result.squareLength * MARGIN.LEFT * 2);
  result.textPosition.y =
    result.squareLength * MARGIN.TOP + result.height * 0.76;

  return result;
}

module.exports = getDimensions;
