const fs = require('fs');

function getRandomNumber(min, max) {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
}

function addMask(value, maskCharacter, desiredTotalLength) {
  let basicValue = value;
  let maskChar = maskCharacter;
  if (typeof basicValue !== "string") basicValue = basicValue.toString();
  if (typeof maskChar !== "string") maskChar = maskChar.toString();
  const valueLength = basicValue.length;
  if (valueLength > desiredTotalLength)
    throw new Error(
      'Строка длиннее, чем указанное количество символов к добавлению'
    );
  return `${maskChar.repeat(desiredTotalLength - valueLength)}${value}`;
}

function download(data, filename = 'data.json', type = 'application/json') {
  // https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
  console.log('data.length', data.length)
  fs.writeFile(filename, data, 'utf8', (err, data) => {
      if (data) console.log('data', data);
      if (err) console.log('err', err);
    });
}

function getRandomArrayMember(array) {
  return array[getRandomNumber(0, array.length - 1)]
}

function verbalizeBoolean(boolean) {
  return boolean ? "да" : "нет"
}

function saveToLS(data, name = "users") {
  localStorage.setItem(name, JSON.stringify(data))
}

function getFromLS(name = "users") {
  return JSON.parse(localStorage.getItem(name))
}

module.exports = {
  getRandomNumber,
  addMask,
  download,
  getRandomArrayMember,
  verbalizeBoolean,
  saveToLS,
  getFromLS
}
