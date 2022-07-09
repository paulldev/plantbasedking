import axios from 'axios';

const API_KEY = 'AIzaSyBTWEA5h_GdUg21FGWKM5AYFW2sfACl71w'

export async function authenticate(mode, email, password) {
    //TODO Signup API link is different to the signin link https://firebase.google.com/docs/reference/rest/auth
    //TODO Search Response Payload at https://firebase.google.com/docs/reference/rest/auth
    //TODO delete the console.log
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
        email: email,
        password: password,
        returnSecureToken: true
    }
    );
    const token = response.data.idToken;
    //console.log(response.data);
    return token;
}
export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}
