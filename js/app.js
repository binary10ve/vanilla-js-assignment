// var Turbolinks = require("turbolinks")
Turbolinks.start()


document.addEventListener("turbolinks:load", function() {
    var pathname = window.location.pathname
    switch(pathname){
        case '/add.html':{
            var event = new Event('OnAddScreenLoad');
            document.dispatchEvent(event);
            break;
        }
            
        case '/':{
            var event = new Event('OnIndexScreenLoad');
            document.dispatchEvent(event);
            break;
        }
            
        default :{
            var event = new Event('OnIndexScreenLoad');
            document.dispatchEvent(event);
        }
            
        
    }
})
 