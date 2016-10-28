function ajax(opt) {
    return new Promise(function (resolve, reject) {
        $.ajax(opt)
        .done(function(ret) {
            resolve(ret);
        })
        .fail(function(err) {
            reject(err);
        })
    });
}

