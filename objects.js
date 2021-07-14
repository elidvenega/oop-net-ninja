//  every object has properties and methods

const userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    identity: 'unknown',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    },
    noAccess() {
        console.log(this.identity, 'identity unknown');
    }
};

userOne.name = 'eli';
console.log(userOne);
userOne.login();
userOne.logout();
userOne.noAccess();

// class Example {
//     constructor(name) {
//         this.mission = name;
//     }
//     ex1() {
//         return `${"oop begins and you become a master developer and get a job"} ${this.mission}`;
//     }
// }

// myExample = new Example('and I will');

// function myExample () {
//     return 'will get developer job';
// }

//document.getElementById("mission").innerHTML = myExample();

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     methods are outside of constructor
//     login() {
//         console.log(this.email, 'just log in');
//         return this;
//     }
//     logout() {
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore() {
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }


// inheritance
// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }


// var admin = new Admin('shaun@ninjas.com', 'sean');

// var users = [userOne, userTwo, admin]

// admin.deleteUser(userOne);

// console.log(users);



// userOne.login();

// userOne.login().updateScore().updateScore().logout() method chaining

// practice
class fullName {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName
    }

    firstName() {
        console.log(this.name, 'is my first name');
        return this;
    }

    lastNames() {
        console.log(this.lastName, 'is my last name');
        return this;

    }

    result() {
        return this.firstName().lastNames()
    }

}

const user = new fullName('elid', 'venega');

//user.result()

document.querySelector('#name').innerHTML = user.result();