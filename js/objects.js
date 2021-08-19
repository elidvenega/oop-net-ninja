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

userOne.email = 'eli@gmail.com';
userOne.name = 'eli';
console.log(userOne);
userOne.login();
userOne.logout();
userOne.noAccess();

// Class that represents end goal
class Goal {
    constructor(missionGoal) {
        this.mission = missionGoal;
    }
    missionObjective() {
        const goal = "OOP begins and you become a master developer and get a job";
        return `${goal} ${this.mission}`;
    }
}

const myJourney = new Goal('and I will.');

document.getElementById("mission").innerHTML = myJourney.missionObjective();


// Method Chaining
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    //methods are outside of constructor
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

let userOne1 = new User('anime@gmail.com', 'Goku');

userOne1.login().updateScore().updateScore().logout()

//inheritance
// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }


// let admin = new Admin('shaun@ninjas.com', 'sean');

// let users = [userOne, userTwo, admin]

// admin.deleteUser(userOne);

// console.log(users);



// userOne.login();



// practice
class fullName {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName
    }

    firstName() {
        //console.log(this.name, 'is my first name');
        return this.name;
    }

    lastNames() {
        // console.log(this.lastName, 'is my last name');
        return this.lastName;

    }

    result() {
        //return this.firstName() + this.lastNames();
        return `${this.firstName()}  ${this.lastNames()}`;
    }

}

const user = new fullName('Elid', 'Venega');

// //user.result()
// console.log(user);

document.querySelector('#name').innerHTML = `${"My name is"} ${user.result()}`;