var cli = require('dastoor').builder;

var root = cli.node('my-cli', function() {
    console.log('hello world!');
})
.help('my test cli');

cli.node('my-cli.sum', { terminal: true})
.controller(function(args) {
   var res = args.initial || args.i || 0;
   args._.forEach(function (i) {
       res += +i;
   });

   console.log('Sum: ' + res);
})
.help({
    description: 'sums numbers',
    options: [{
        name: '-i, --initial',
        description: 'initial value'
    }],
    usage: [
        'e.g. my-cli sum 1 2 3 -i 100'
    ]
});

module.exports = root;
