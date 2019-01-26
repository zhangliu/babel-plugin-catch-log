function test() {
    try {
        test2();
    } catch (err) {
        __elog.push(err)

        console.log(err);
    }
}

function test2() {
    try {
        JSON.parse('123');
    } catch (e) {
        __elog.push(e)

        throw e;
    }
}