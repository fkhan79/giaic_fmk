class EightQueens {
    private readonly size: number;
    private readonly board: number[][];

    constructor(size: number) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
    }

    private isSafe(row: number, col: number): boolean {
        // Check left side of the current row
        for (let i = 0; i < col; i++) {
            if (this.board[row][i] === 1) {
                return false;
            }
        }

        // Check upper diagonal on left side
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === 1) {
                return false;
            }
        }

        // Check lower diagonal on left side
        for (let i = row, j = col; j >= 0 && i < this.size; i++, j--) {
            if (this.board[i][j] === 1) {
                return false;
            }
        }

        return true;
    }

    private solveQueensUtil(col: number): boolean {
        if (col >= this.size) {
            return true;
        }

        for (let i = 0; i < this.size; i++) {
            if (this.isSafe(i, col)) {
                this.board[i][col] = 1;

                if (this.solveQueensUtil(col + 1)) {
                    return true;
                }

                this.board[i][col] = 0; // Backtrack
            }
        }

        return false;
    }

    solveQueens(): boolean {
        if (!this.solveQueensUtil(0)) {
            console.log("Solution does not exist");
            return false;
        }

        this.printSolution();
        return true;
    }

    printSolution(): void {
        for (let i = 0; i < this.size; i++) {
            let row = "";
            for (let j = 0; j < this.size; j++) {
                row += (this.board[i][j] === 1) ? "[Q]" : "[ ]";
            }
            console.log(row);
        }
    }
}

const eightQueens = new EightQueens(8);
eightQueens.solveQueens();