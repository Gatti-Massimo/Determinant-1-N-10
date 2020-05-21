function Load() {
    
    var length = 0;
    var flag = 0;

    do {
        if(flag > 0){
            alert("Try with a number beetween 1 and 10")
        }
        length = prompt('Choose the dimension of the matrix: ', '3');
        flag++;
    } while (length < 1 || length > 11);

    var matrix = [];
    for (var i = 0; i < length; i++) {
        matrix[i] = [];
        for (var j = 0; j < length; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }

    Calculate(matrix, length);
    Print(matrix);
}



function Calculate(matrix, i) {

    var l = 0;

    if (i == 1) {
        l = matrix[0][0];
    } else if (i == 2) {
        l = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else {
        var exp = [];
        
        for (var z = 0; z < i; z++) {
            exp[z] = [];
            for (var i1 = 1; i1 < i; i1++) {
                var j = 0;
                exp[i1] = [];
                for (var j1 = 0; j1 < i; j1++) {
                    if (j1 != z) {
                        exp[i1 - 1][j] = matrix[i1][j1];
                        j++;
                    }
                }
            }
            if (z % 2 == 0) {
                l += matrix[0][z] * Calculate(exp, i - 1);
            } else {
                l -= matrix[0][z] * Calculate(exp, i - 1);
            }
        }
    }
    return l;
}



function Print(matrix) {

    var rowCount = document.getElementById("outputTable").rows.length;

    if (rowCount >= 1) {
        for (let i = rowCount; i >= 1; i--) {
            document.getElementById("outputTable").deleteRow(i - 1);
        }
    }

    var table = document.getElementById("outputTable");
    for (let n = 0; n < matrix.length; n++) {
        var row = table.insertRow(-1);
        for (let m = 0; m < matrix.length; m++) {
            row.insertCell(m).innerHTML = matrix[n][m];
        }
    }

    document.getElementById("result").innerHTML = Calculate(matrix, matrix.length);
}