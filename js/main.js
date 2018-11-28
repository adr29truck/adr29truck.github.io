document.addEventListener('DOMContentLoaded', function () {
    var userScore = 0;
    var computerScore = 0;
    const userScore_span = document.getElementById("user_score");
    const computerscore_span = document.getElementById("computer_score");
    const scoreboard_div = document.querySelector(".score-board");
    const result_div = document.querySelector(".result > p");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissor_div = document.getElementById("s");

    function getcomputer_choise() {
        const choises = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choises[randomNumber]
    }

    function converttoword(letter) {
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        else
            return "Scissor";
    }

    function win(user, computer) {
        userScore++;
        userScore_span.innerHTML = userScore;
        result_div.innerHTML = converttoword(user) + " beats " + converttoword(computer) + ". User wins!";
    }

    function lose(user, computer) {
        computerScore++;
        computerscore_span.innerHTML = computerScore
        result_div.innerHTML = converttoword(user) + " don´t beat " + converttoword(computer) + ". Computer wins!";
    }

    function draw(user, computer) {
        result_div.innerHTML = "It´s a draw. Both drew " + converttoword(user);
    }

    function game(userChoise) {
        const computer_choise = getcomputer_choise();
        switch (userChoise + computer_choise) {
            case "rs":
            case "sp":
            case "pr":
                win(userChoise, computer_choise);
                console.log("you win");
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoise, computer_choise);
                console.log("computer wins");
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoise, computer_choise);
                console.log("it is a draw");
                break;
        }
    }


    function main() {
        rock_div.addEventListener("click", function () {
            game("r");
            // console.log("you pressed rock.");
        });
        paper_div.addEventListener("click", function () {
            game("p")
            // console.log("you pressed paper.");
        });
        scissor_div.addEventListener("click", function () {
            game("s")
            // console.log("you pressed scissor.");
        });
    }

    main();


});