const moment = require('moment')

// Formats
const dateFormats = [
  // Date
  "YYYY-MM-D",
  "D-MM-YYYY",
  "YYYY MM D",
  "D MMM YYYY",
  "D MMMM YYYY",
  "MMM D YYYY",
  "MMM D, YYYY",
  "MMMM D YYYY",
  "MMMM D, YYYY",
  // Unix
  "X"
]
const datetimeFormats = [
  // Timestamp
  "YYYY-MM-D HH:mm:ss",
  "D-MM-YYYY HH:mm:ss",
  "YYYY MM D HH:mm:ss",
  "D MMM YYYY HH:mm:ss",
  "D MMMM YYYY HH:mm:ss",
  "MMM D YYYY HH:mm:ss",
  "MMM D, YYYY HH:mm:ss",
  "MMMM D YYYY HH:mm:ss",
  "MMMM D, YYYY HH:mm:ss",
  // Unix
  "X"
]

const convertTime = function(timestamp) {
  const date = moment(timestamp, dateFormats, true)
  const datetime = moment(timestamp, datetimeFormats, true)
  const converted = {
    natural: "null",
    unix: "null"
  }
  if (datetime.isValid()) {
    converted.natural = datetime.format('MMM D, YYYY HH:mm:ss')
    converted.unix = datetime.format('X')*1
  } else if (date.isValid()) {
    converted.natural = date.format('MMM D, YYYY')
    converted.unix = date.format('X')*1
  }
  return converted
}

module.exports = convertTime

// convertTime('2015-02-23')
// convertTime('23-02-2015')
// convertTime('2015 02 23')
// convertTime('23 Feb 2015')
// convertTime('23 February 2015')
// convertTime('Feb 23 2015')
// convertTime('Feb 23, 2015')
// convertTime('February 23 2015')
// convertTime('February 23, 2015')
// convertTime('2015-02-23 16:09:11')
// convertTime('23-02-2015 16:09:11')
// convertTime('2015 02 23 16:09:11')
// convertTime('23 Feb 2015 16:09:11')
// convertTime('23 February 2015 16:09:11')
// convertTime('Feb 23 2015 16:09:11')
// convertTime('Feb 23, 2015 16:09:11')
// convertTime('February 23 2015 16:09:11')
// convertTime('February 23, 2015 16:09:11')