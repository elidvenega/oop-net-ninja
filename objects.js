// has properties and methods

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

userOne.name = 'eli';
console.log(userOne);
// userOne.login();
// userOne.logout();

// class Example{
//     constructor(name){
//         this.mission = name;
//     }
//     ex1() {
//         return "oop begins and you become a master developer and get a job" + this.mission;
//     }
// }

// myExample = new Example('and I will');

// console.log(myExample);

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // methods are outside of constructor
    login() {
        console.log(this.email, 'just log in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}


var userOne = new User('eli@SpeechGrammarList.com', 'eli');

userOne.login();

userOne.login().updateScore().updateScore().logout() // method chaining









