
/**
 * 
 * @param {'fnBtn_' + this.id + '_' + fnBtns[i]} id   in case of functional buttons
 * @param {{ title: fnBtns[i], value: fnBtns[i] ,className: "btn btn-danger function" }} options  in case of functional buttons
 */
function ButtonView (id,options){

    this.init = function(id,otions){
        this.id = id;
        this.options = options;
        this.widgetElement = null;
        this._setWidget();
        
       
    }

/**
 *  creating functional buttons in html
 */
this._setWidget = function(){
    
    this.widgetElement = document.createElement('button');   // creating button element
    this.widgetElement.innerHTML = this.options.title;      // setting inner html
    this.widgetElement.setAttribute('id',this.id);          // setting id
    // this.widgetElement.setAttribute('value',this.options.value);  // -------- not required ---------
    this.widgetElement.setAttribute('class',this.options.className);     // setting class name

}

/**
 * 
 * @returns functional button widget - html element
 */
this.getWidget = function(){
    return this.widgetElement;
}

/**
 * 
 */
this.destroy =function(){

}

this.init(id,options);

}