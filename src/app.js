function displayJewels(response) {
  new Typewriter("#jewels", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateJewels(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3e8759b0d65caf6a360f578a42b9dot8";
  let context =
    "You are a knowledgable jewelry expert and love to style up people.You are amazing jewelry designer . You mission is to generate the most stylish unique design  suitable for user event   in basic HTML and separate each line with a <br />. Make sure to follow the user instructions .Do not include a title to the jewelry. Sign the jewelry with 'SheCodes AI' inside a <strong> element at the end of the Jewelryand NOT at the beginning .Make sure to include most affordable price in too at end of every design";
  let prompt = `User instructions: Generate a jewelry about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#jewels");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a jewelry about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayJewels);
}
let poemFormElement = document.querySelector("#jewelry-generator-form");
poemFormElement.addEventListener("submit", generateJewels);