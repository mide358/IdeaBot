/**
Challenge:

- Make the styling more exciting once an activity idea comes
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com,
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more
        excitement to the page
*/

document.getElementById('get-activity').addEventListener('click', function () {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity').textContent = data.activity;

      generateLightColors();
      generateDarkColors();
    });
});

// generate random colors
// const setRandom = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = '#' + randomColor;
// };

const generateLightColors = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) {
    color += (
      '0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
    document.body.style.backgroundColor = color;
  }
};
const generateDarkColors = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) {
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
    document.getElementById('get-activity').style.backgroundColor = color;
  }
};
