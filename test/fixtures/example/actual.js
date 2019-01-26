function test() {
    try {
        test2();
    } catch (err) {
        console.log(err);
    }
}

function test2() {
    try {
        JSON.parse('123');
    } catch(e) {
        throw e;
    }
}