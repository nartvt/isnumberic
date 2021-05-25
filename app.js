var mailformat = /^[a-zA-Z][0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
var email = "_a9999@gmail.com"
if (email.match(mailformat)) {
    console.log("Email valid")
} else {
    console.log("Email invalid")
}

// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address