function User(email, name, nationality) {
    this.email = email;
    this.name = name;
    this.nationality = nationality;
    this.online = false;
}

User.prototype.signIn = function () {
    this.online = true;
    console.log(this.email, "has logged in", "and hes", this.nationality);
};


User.prototype.signOut = function () {
    this.online = false;
    console.log(this.email, "has logged out", "and hes", this.nationality);
};

function Admin(...args) {
    User.apply(this, args)
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {
    users = users.filter(user => {
        return user.email != user.email;
    });
}


var userOne = new User("eli@SpeechGrammarList.com", "eli", "Mexican");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi", "Japenese");
var admin = new Admin('shaun@ninjas.com', 'saun', "British");

var users = [userOne, userTwo, admin];

// console.log(userOne);
userOne.signIn()
userTwo.signOut()

console.log(admin);