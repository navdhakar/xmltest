var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xml = new XMLHttpRequest();
xml.open("GET", "https://javascript.info/xmlhttprequest");
// fetch(URI, {
//   method:________,
//   body:DataCue,
//   header:{
//       'content-type': application/JSON,
//   }
// })
// .then(response = () => response.json())
// .then(data = () => {
// console.log(data);
// });
xml.send();
xml.onload = () => {
  console.log(`xhr response is ${xml.responseText}`);
};
