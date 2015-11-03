console.log(process.argv.slice(2).reduce(function(x,y){return x+(+y);},0));
