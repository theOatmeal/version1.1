var score = [80, 50, 45, 65, 90];

score[0] = 20;
document.write(score[0] + "<br/>");
document.write(score[2] + "<br/>");

var hungry = true;

if (hungry) {
    document.write("我就去吃飯" + "<br/>");
}

var rainy = true;

if (rainy) {
    document.write("開車" + "<br/>");
} else {
    document.write("走路" + "<br/>");
}

var you_score = 99;

if (you_score == 100) {
    document.write("give you $100" + "<br/>");
} else if (you_score >= 80) {
    document.write("give you $80" + "<br/>");
} else if (you_score >= 60) {
    document.write("give you $50" + "<br/>");
} else {
    document.write("you need to give me $300" + "<br/>");
}

if (you_score == 100 && rainy) {
    document.write("give you $1000" + "<br/>");
} else if (you_score >= 80 && !rainy) {
    document.write("give you $800" + "<br/>");
} else if (you_score >= 60 && rainy) {
    document.write("give you $500" + "<br/>");
} else {
    document.write("you need to give me $3000" + "<br/>");
}

if (you_score == 100 || rainy) {
    document.write("give you $1000" + "<br/>");
} else if (you_score >= 80 || rainy) {
    document.write("give you $800" + "<br/>");
} else if (you_score >= 60 || rainy) {
    document.write("give you $500" + "<br/>");
} else {
    document.write("you need to give me $3000" + "<br/>");
}

var num1 = 80, num2 = 70, num3 = 90;

function max_num(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if(num2 >= num1 && num2 >= num3) {
        return num2; 
    } else {
        return num3;
    }
}

document.write(max_num(num1, num2, num3) + "<br/>");

function hello(name, height) {
    document.write("你好" + name + " " + height + "公分<br/>");
}

hello("Oatmeal", 172);

function add(num1, num2) {
    return num1 + num2;   
}

value = add(3, 2);
document.write(value + "<br/>");
document.write(add(18, 19) + "<br/>");

var person = {
    name: "Oatmeal",
    age: 18,
    is_male: true,
    print_name: function() {
        document.write(this.name + "<br/>");
    }
}

person.print_name();

var movie = {
    title: "歡迎來到實力至上主義的教室",
    author: "衣笠彰梧",
    character: [
        {
            name: "綾小路清隆",
            is_male: true
        },
        {
            name: "堀北鈴音",
            is_male: false
        }
    ]
}

document.write(movie.character[0].name + "<br/>");

var i = 1;

while(i <= 7) {
    document.write(i + "<br/>");
    i++;
}

for (var j = 0; j < 10; j++) {
    document.write(j + 10 + "<br/>");   
}

var friends = ["Oatmeal", "綾小路", "小黑", "小蘭"];

for (var k = 0; k < friends.length; k++) {
    document.write(friends[k] + "<br/>");
}

// class 物件模板
class Phone {
    constructor (type, year, is_waterproof) {
        this.type = type;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age() {
        return 2024 - this.year;
    }
}

var phone1 = new Phone("iPhoneX", "2023", "false");
var phone2 = new Phone("iPhone 6 plus", "2003", "true");
document.write(phone1.type + "<br/>");
document.write(phone1.year + "<br/>");
document.write(phone1.is_waterproof + "<br/>");
document.write(phone1.phone_age() + "<br/>");
document.write(phone2.type + "<br/>");
document.write(phone2.year + "<br/>");
document.write(phone2.is_waterproof + "<br/>");
document.write(phone2.phone_age() + "<br/>");

var number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 12, 13, 0]
];

document.write(number[2][0] + "<br/>");

for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < number[i].length; j++) {
        document.write(number[i][j] + " ");
    }
    document.write("<br/>");
}
