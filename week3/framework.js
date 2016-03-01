function Wrapper(el){
    // elementen meegeven
    this.el = el;
    this.isArray = el.length > 1 ? true : false; // array of niet? dan lussen anders niet
}

Wrapper.prototype.on = function(event, callback){ //callback: wat moet er daarna gebeuren

    if(this.isArray){
        for(var i = 0; i < this.el.length; i++){
            this.el[i].addEventListener(event, callback); //click, function
        }
    }else{
            this.el[0].addEventListener(event, callback);
    }
    return this;
};


Wrapper.prototype.css = function(prop, val){ // prop: color val: green
    if(this.isArray){ //this: bevat array met items en dat het een array is of niet
        // elementen uit array lussen
        for(var i = 0; i < this.el.length; i++){
            this.el[i].style[prop] = val; // property aanpassen en gelijk stellen aan value
        }
    }else{
        this.el[0].style[prop] = val;
    }
    return this; // geef huidig wrapper element door voor in het geval dat volgende dit nodig heeft (chaining)
};

var $ = function(sel){
    // als er al een element geselecteerd is, niet zoeken in dom, gwn rechtstreeks doorgeven aan wrapper
    console.log( typeof(sel));

    /* #to . to li */
    // querySelector geeft array terug met elementen
    // array met 1 element
    var elements =  document.querySelectorAll(sel); //lijst van elementen return: teruggeven van element

    // elmenten doorgeven aan wrapper en daar methodes bij zetten
    return new Wrapper(elements);
};

/*
 function markAsDone(el, completed){

 document.getElementById(el).style.textDecoration = "line-through";
 if(completed){
 document.getElementById(el).style.color = "red";
 }

 }
 markAsDone("todo1", true); //true volledig klaar
 markAsDone("todo2", false); //gedeeltelijk klaar

 */

// HTMLElement ingebouwd (.prototype(klasse waar de rest van overerft = selecteer de basisclass, zit alles is waar een html element aan kan
// selecteer element, dit element kent ineens de methode imd

/*
 HTMLElement.prototype.IMD = function(){
 this.style['color'] = "red";
 };
 var el = document.getElementById("todo1");
 el.css("color", "green");
 * */
/*
 HTMLElement.prototype.css = function(prop,val){
 //property meegeven aan prop
 this.style[prop] = val;
 };
 */

//