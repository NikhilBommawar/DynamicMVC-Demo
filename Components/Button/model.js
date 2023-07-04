/**
 * 
 * @param {'fnBtn_' + this.id + '_' + fnBtns[i]} id 
 * @param { { title: fnBtns[i], value: fnBtns[i] ,className: "btn btn-danger function" }} options
 */

function ButtonModel(id,options){
    this.init = function(id,options){
        this.id = id;
        this.options= options;
    }

    this.init(id,options);
}