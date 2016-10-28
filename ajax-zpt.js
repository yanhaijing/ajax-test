function ajax(opt) {
    var success = opt.success || function () {};

    return new Promise(function (resolve, reject) {
        opt.success = function (ret) {
            success(ret);
            resolve(ret);
        };

        $.ajax(opt);
    });
}

