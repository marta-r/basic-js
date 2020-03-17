class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    alfabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];

    encrypt(message, key) {
        this.arrMessege = message.split("");
        this.arrMessege2 = [];
        for (let b = 0; b < this.arrMessege.length; b++) {
            if (this.arrMessege[b] != " ") {
                this.arrMessege2.push(this.arrMessege[b]);
            }
        }
        this.arrKey = key.split("");
        this.arrcrypt = [];

        if (this.arrMessege2.length > this.arrKey.length) {
            let counter = 0;
            for (let a = 0; a < this.arrMessege2.length; a++) {
                if (counter === this.arrKey.length) {
                    counter = 0;
                } else {
                    this.arrKey.push(this.arrKey[counter]);
                    counter++;
                }
            }
        }

        for (let i = 0; i < this.arrMessege2.length; i++) {
            if (this.alfabet.indexOf(this.arrMessege2[i].toUpperCase()) == -1) {
                this.arrcrypt.push(this.arrMessege2[i]);
            } else {
                this.arrcrypt.push(
                    this.alfabet[
                        this.alfabet.indexOf(
                            this.alfabet[
                                (this.alfabet.indexOf(
                                    this.arrMessege2[i].toUpperCase()
                                ) +
                                    this.alfabet.indexOf(
                                        this.arrKey[i].toUpperCase()
                                    )) %
                                    26
                            ]
                        )
                    ]
                );
            }
        }

        for (let c = 0; c < this.arrMessege.length; c++) {
            if (this.arrMessege[c] == " ") {
                this.arrcrypt.splice(c, 0, " ");
            }
        }

        if ((this.isDirect === false)) {
            return this.arrcrypt.reverse().join("");
        }

        return this.arrcrypt.join("");
    }

    decrypt(message, key) {
        this.arrMessege = message.split("");
        this.arrMessege2 = [];
        for (let b = 0; b < this.arrMessege.length; b++) {
            if (this.arrMessege[b] != " ") {
                this.arrMessege2.push(this.arrMessege[b]);
            }
        }
        this.arrKey = key.split("");
        this.arrcrypt = [];

        if (this.arrMessege2.length > this.arrKey.length) {
            let counter = 0;
            for (let a = 0; a < this.arrMessege2.length; a++) {
                if (counter === this.arrKey.length) {
                    counter = 0;
                } else {
                    this.arrKey.push(this.arrKey[counter]);
                    counter++;
                }
            }
        }

        for (let i = 0; i < this.arrMessege2.length; i++) {
            if (this.alfabet.indexOf(this.arrMessege2[i].toUpperCase()) == -1) {
                this.arrcrypt.push(this.arrMessege2[i]);
            } else {
                this.arrcrypt.push(
                    this.alfabet[
                        this.alfabet.indexOf(
                            this.alfabet[
                                (this.alfabet.indexOf(
                                    this.arrMessege2[i].toUpperCase()
                                ) +
                                    26 -
                                    this.alfabet.indexOf(
                                        this.arrKey[i].toUpperCase()
                                    )) %
                                    26
                            ]
                        )
                    ]
                );
            }
        }

        for (let c = 0; c < this.arrMessege.length; c++) {
            if (this.arrMessege[c] == " ") {
                this.arrcrypt.splice(c, 0, " ");
            }
        }

        if ((this.isDirect === false)) {
            return this.arrcrypt.reverse().join("");
        }

        return this.arrcrypt.join("");
    }
}

module.exports = VigenereCipheringMachine;
