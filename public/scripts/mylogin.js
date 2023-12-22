var webAuth = new auth0.WebAuth({
    "domain": "dev-f44ms5jghiv5m6bz.us.auth0.com",
    "clientID": "eXKqU3k1iguDMaeiGyh9aKG8N5kbHFSA",
    "redirectUri": 'http://localhost:4321/login',
    'responseType': "token id_token",
    'scope': "openid profile",
});

/**
 * Starts the authentication flow
 */
const login = async (email) => {
    webAuth.passwordlessStart({
            connection: 'email',
            send: 'code',
            email: email
        }, function (err,res) {
            console.error(err);
        }
    );
};

const sendcode = async (email, code) => {
    console.log('sending '+code)
    webAuth.passwordlessLogin({
            connection: 'email',
            email: email,
            verificationCode: code
        }, function (err,res) {
            console.error(err);
        }
    );
};

const getinfo =  () => {
    webAuth.parseHash({ hash: window.location.hash }, function(err, authResult) {
        if (err) {
            return console.log(err);
        }

        webAuth.client.userInfo(authResult.accessToken, function(err, user) {
            console.log(user);
        });
    });
}

getinfo();


 function socialConnect(connector, callback) {
     webAuth.authorize({ connection: connector }, callback);
}

function askCode(e){
    var emailValue = document.getElementById("email-input").value;
    console.log(emailValue);
    login(emailValue);
}
function sendCode(e){
    var codeValue = document.getElementById("validation-code-input").value;
    var emailValue = document.getElementById("email-input").value;
     console.log(codeValue);
    sendcode(emailValue, codeValue);
}

