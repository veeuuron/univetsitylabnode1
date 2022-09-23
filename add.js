module.exports = class myModule {
  _name = "";

   constructor(_name){
    this._name = _name;
   }

   resFunc(){
    return `${this._name} :)`;
   }
}
