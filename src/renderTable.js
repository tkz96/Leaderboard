const leaderboard = document.getElementById('leaderboard');

export const renderTable = (resultsArray) => {
    for (let i = 0; i < resultsArray.length; i += 1) {
        const li = document.createElement('li');
        li.innerHTML = resultsArray[i];
        leaderboard.appendChild(li);
    }
}
