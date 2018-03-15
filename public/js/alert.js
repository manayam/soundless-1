function myFunction() {
    alert('Sounds like the volume is too loud! Consider turning down the volume.');
}

var i = setInterval(function() { myFunction(); }, 20*1000);