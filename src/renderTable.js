const leaderboard = document.getElementById('leaderboard');

export const renderTable = (resultsArray) => {
    leaderboard.innerHTML = '';
    for (let i = 0; i < resultsArray.result.length; i += 1) {
        const li = document.createElement('li');
        li.innerHTML = `${resultsArray.result[i].user}: ${resultsArray.result[i].score}`;
        leaderboard.appendChild(li);
    }
}
