class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }

        this.gameResults.push(gameResult);
    }

    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let loses = this.gameResults.filter(result => !result.win).length;

        return [games, wins, loses];
    }

}