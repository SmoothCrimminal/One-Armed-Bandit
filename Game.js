class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("start").addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.colors = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLoses = document.querySelector('.score span.loss');


        this.render();
    }

    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "",
     stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.colors.forEach((color, index) => {
            color.style.backgroundColor = colors[index];
        })
        this.spanWallet.textContent = money;
        if (result) result = `Wygrałeś ${wonMoney}$`;
        else if (!result && result !== "") result = `Przegrałeś ${bid}$`;
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLoses.textContent = stats[2];
    }

    startGame() {
        if (this.inputBid.value < 1)
            return alert("Kwota którą chcesz grać jest za mała");
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("Masz za mało środków, lub została podana nieprawidłowa wartość");
        }

        this.wallet.changeWalletValue(bid, '-');

        this.draw = new Draw();
        const colors = this.draw.drawResults();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWon(win, bid);
        this.wallet.changeWalletValue(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, wonMoney);
        
    }
}
