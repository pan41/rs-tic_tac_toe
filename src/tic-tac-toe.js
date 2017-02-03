class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.matrix[rowIndex][columnIndex]){
            this.matrix[rowIndex][columnIndex] = this.symbol;
            this.symbol = (this.symbol === 'x') ? 'o' : 'x';
        }else
            return;
    }

    isFinished() {
        if((this.getWinner() == 'x' || this.getWinner() == 'o') || this.noMoreTurns()){
            return true;
        }else
            return false;
    }

    getWinner() {
        if (
        ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[1][1] === this.matrix[2][2])) ||
        ((this.matrix[2][0] === this.matrix[1][1]) && (this.matrix[1][1] === this.matrix[0][2]))
        ) {
            return this.matrix[1][1];
        }

        for (var i = 0 ; i < 3; i++) {
            if ((this.matrix[0][i] === this.matrix[1][i]) && (this.matrix[1][i] === this.matrix[2][i])) {
                if (this.matrix[0][i]) return this.matrix[0][i];
            }
            if ((this.matrix[i][0] === this.matrix[i][1]) && (this.matrix[i][1] === this.matrix[i][2])) {
                if (this.matrix[i][0]) return this.matrix[i][0];
            }
        }
        return null;
    }

    noMoreTurns() {
        for (var i = this.matrix.length-1; i >= 0; i--) {
            for (var j = this.matrix[i].length-1; j >= 0; j--) {
                if(!this.matrix[i][j])
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner())
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
