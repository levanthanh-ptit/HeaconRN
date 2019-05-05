var constant = require('../../../static/constant');
export const signUp = (userName, password, firstName, lastName, birthday, gender) => {
    fetch(constant.server + '/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName,
            password,
            gender,
            firstName,
            lastName,
            birthday
        }),
    })
}
