exports.count = 0;
setTimeout(function () {
    console.log('increase count to',exports.count++,'count.js aftere 500s')
},500)