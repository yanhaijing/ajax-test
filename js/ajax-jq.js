ES6Promise.polyfill();

function ajax(opt) {
    return new Promise(function (resolve, reject) {
        $.ajax(opt).done(resolve).fail(reject)
    });
    // return Promise.resolve($.ajax(opt));
}

