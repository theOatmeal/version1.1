var questions = [
    {
        prompt: "Oatmeal是不是綾小路?\n(a)是\n(b)不是",
        answer: "a"
    },
    {
        prompt: "Oatmeal是不是很帥?\n(a)是\n(b)不是",
        answer: "a"
    },
    {
        prompt: "Oatmeal是不是很棒?\n(a)是\n(b)不是",
        answer: "a"
    }
]

var score = 0;
for (var i = 0; i < questions.length; i++) {
    var input = prompt(questions[i].prompt);
    if (input == questions[i].answer) {
        score++;
        alert("答對了!");
    } else {
        alert("答錯了!");
    }
}
alert("總共答對了" + score + "題!");