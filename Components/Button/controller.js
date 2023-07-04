
/**
 * 
 * @param {'fnBtn_' + this.id + '_' + fnBtns[i]} id  for function buttons
 * @param { { title: , value: fnBtns[i] ,className: "btn btn-danger function" }} options  for function buttons
 */
function Button (id,options){
    this.init = function(id,options){
        this.model = new ButtonModel(id,options);  // getting button model
        this.view = new ButtonView(id,options);    // getting button view and setting the widget
        this.id = id;
        this.options = options;
        this.widgetElement = this.view.getWidget();     // getting functional button widget i.e html element
        this._setEvents();
    }

/**
 *  setting event of on click
 */
this._setEvents = function(){
    var _this = this;

    _this.widgetElement.onclick = function(){
        _this.onBtnPress(_this.id, _this.options.value);

    }
}

/**
 * 
 * @param {*} id 
 * @param {*} value 
 */
this.onBtnPress = function(id,value){
    console.log("id", id, value)
}

this.getWidget = function(){
    return this.widgetElement;
}

this.init(id,options);


}