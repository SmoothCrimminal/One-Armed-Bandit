class Wallet {
    constructor(money) {

        let _money = money;

        this.getWalletValue = () => _money;

        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWalletValue = (value, type = "+") => {

            if (typeof value === "number" && !isNaN(value)) {
                switch (type) {
                    case "+": return _money += value;
                    case "-": return _money -= value;
                    default: throw new Error("Nieprawidłowy typ działania!");
                }
            } else {
                
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba");
            }
            
        }
    }
}
