const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
    };

};