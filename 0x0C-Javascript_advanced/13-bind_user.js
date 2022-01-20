var user = { hobby: 'Calligraphy', favoriteSport: 'Hockey', astrologicalSign: 'Aries', firstName: 'Buillaume', lastName: 'Ialva', location: 'Telaviv', occupation: 'Engineer' };

function logWelcomeUser (welcomeString) {
    return (`${welcomeString}, ${user.firstName}.Your occupation is: ${user.occupation}`);
}

var bindLogWelcomeUser = logWelcomeUser.bind(user);

console.log(bindLogWelcomeUser('Hello'));
