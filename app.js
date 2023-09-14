const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const resultCard = document.getElementById("result-card");
const sound = document.getElementById("sound");
const button = document.getElementById("search-btn");


button.addEventListener("click", () => {

    let inputWord = document.getElementById("word").value;
    // console.log(inputWord);

    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        resultCard.innerHTML = `
        <div class="word">
                    <h4>${inputWord}</h4>
                    <button onclick="playSound()">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
                <div class="partofspeech">
                    <h4>${data[0].meanings[0].partOfSpeech}</h4>
                </div>
                <div class="definition">
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                </div>
                `;
         sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
        //  console.log(sound);
    });

});

function playSound() {
    sound.play();
}