let x= parseInt(prompt('Nhap kich thuoc ban co x :'));
let y= parseInt(prompt('Nhap kich thuoc ban co y :'));
let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < x; i++) {
    data+='<br>'
    board[i] = [];
    for (let j = 0; j < y; j++) {
        board[i][j]='O';
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < x; i++) {
        data += "<br/>";
        for (let j = 0; j < y; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
}


