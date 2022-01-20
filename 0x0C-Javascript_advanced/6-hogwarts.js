class studentHogwarts {
    constructor (privateScore = 0, name = null) {
        this.privateScore = privateScore;
        this.name = name;
    }

    changeScoreBy (points) {
        this.privateScore += points;
    }

    setName (newName) {
        this.name = newName;
    }

    rewardStudent () {
        this.changeScoreBy(1);
    }

    penalizeStudent () {
        this.changeScoreBy(-1);
    }

    getScore () {
        return `${this.name}: ${this.privateScore}`;
    }
}

let i;
var harry = new studentHogwarts();
harry.setName('Harry');

for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}

var draco = new studentHogwarts();
draco.setName('Draco');

for (i = 0; i < 1; i++) {
    draco.rewardStudent();
}

for (i = 0; i < 3; i++) {
    draco.penalizeStudent();
}

console.log(harry.getScore());
console.log(draco.getScore());
