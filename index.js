document.getElementById('get-activity').addEventListener('click', getResponse);

async function getResponse() {
  try {
    const response = await fetch('https://apis.scrimba.com/bored/api/activity');

    const data = await response.json();
    document.getElementById('activity').textContent = data.activity;

    generateLightColors();
    generateDarkColors();
  } catch (err) {
    console.error(err);
  }
}

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
