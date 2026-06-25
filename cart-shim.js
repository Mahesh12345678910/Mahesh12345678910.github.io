function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

function writeCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=0; path=/";
}

window.simpleCart = window.simpleCart || {
    add: function() {
        let args = Array.prototype.slice.call(arguments);
        let parsed = {};
        args.forEach(function(arg) {
            let parts = arg.split('=');
            parsed[parts[0]] = parts.slice(1).join('=');
        });
        let existing = readCookie('simpleCart') || '';
        let quantity = 1;
        if (parsed.quantity) {
            quantity = parseInt(parsed.quantity, 10) || 1;
        }
        if (!parsed.name || !parsed.price) {
            return;
        }
        let itemString = 'name=' + parsed.name + '||price=' + parsed.price + '||image=' + (parsed.image || '') + '||quantity=' + quantity;
        if (existing.length > 0) {
            existing += '++' + itemString;
        } else {
            existing = itemString;
        }
        writeCookie('simpleCart', encodeURI(existing), 7);
    }
};
