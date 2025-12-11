function generatepassword(length, includelowercase, includeuppercase, includenumbers, includespecialchar)
{
    const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialchar = "!@#$%^&*()_+";

    let allowedchar = "";
    let password = "";

    allowedchar += includelowercase ? lowercasechar : "";
    allowedchar += includeuppercase ? uppercasechar : "";
    allowedchar += includenumbers ? numbers : "";
    allowedchar += includespecialchar ? specialchar : "";

    if (length <= 0) {
        return "(password length must be at least 1)";
    }
    if (allowedchar.length === 0) {
        return "(at least one character set must be enabled)";
    }

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
    }

    return password;
}
const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includespecialchar = true;

const password = generatepassword(
    passwordlength,
    includelowercase,
    includeuppercase,
    includenumbers,
    includespecialchar
);

console.log(password);
