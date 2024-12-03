const btn = document.querySelectorAll('.box');
// let reset = document.querySelectorAll('.reset');
let turnO = true; //playerX,playerO;
// let win = document.querySelectorAll('.winner');
var msg = document.getElementById('hide');
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btn.forEach((box) => {
    box.addEventListener("click", () => {
        //    console.log("Box was clicked");
        // box.innerText = "ABCD";
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        check();
    });
});
let check = () => {
    for (let pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(btn[pattern[0]].innerText, btn[pattern[1]].innerText, btn[pattern[2]].innerText);
        let pos1 = btn[pattern[0]].innerText;
        let pos3 = btn[pattern[1]].innerText;
        let pos2 = btn[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                console.log("Winner")
                msg.style.display = 'block';
                showwin(pos1);


            }

        }
    }
}
let showwin = (winner) => {
    msg.innerText = `Congratulation winner is ${winner}`;
    for (let box of btn) {
        box.disabled = true;
    }

}

function reset() {
    turnO = true;
    msg.style.display = 'none';
    for (const box of btn) {
        box.innerText = "";
    }
    btn.forEach((box) => {
        box.disabled = false;
    })
}