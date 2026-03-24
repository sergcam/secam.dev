const prime = 2147483647
const passHash = 1

function toHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

function checkPassword(pwd){
    k = toHash(pwd)
    hash = Math.floor(((k * .123) % 1) * prime)
    console.log(hash)
}

checkPassword("")