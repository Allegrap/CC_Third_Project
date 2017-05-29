var PlayerModel = require("./player_model.js");
var BarModel = require("./bar_model.js");
var ItemModel = require("./item_model.js");
var RequestHelper = require("../helpers/requestHelper.js");

var ModelsContainer = function(){
  this.requestHelper = new RequestHelper;
}

ModelsContainer.prototype = {
  allPlayerItems: function(callback){
    this.requestHelper.makeGetRequest("http://localhost:3000/api/player_inventory", function(results){
      console.log(results[0])
      var playerItems = this.populatePlayerItems(results);
      console.log(playerItems[0])
      callback(playerItems);
    }.bind(this));
  },
  populatePlayerItems: function(results){
    var playerItems = results.map(function(resultObject){
      return new ItemModel(resultObject);
    });
    return playerItems;
  },
  addPlayerItem: function(newItem, callback){
    var itemData = JSON.stringify(newItem);
    this.requestHelper.makePostRequest('http://localhost:3000/api/player_inventory', callback, itemData);
  },
  removePlayerItem: function(itemToRemove, callback){
    var id = itemToRemove.id
    var itemData = JSON.stringify(itemToRemove);
    this.requestHelper.makeDeleteRequest('http://localhost:3000/api/player_inventory/' + id, callback);
  },

  allBarItems: function(callback){
    this.requestHelper.makeGetRequest("http://localhost:3000/api/bar_inventory", function(results){
      var barItems = this.populateBarItems(results);
      callback(barItems);
    }.bind(this));
  },
  populateBarItems: function(results){
    var barItems = results.map(function(resultObject){
      return new ItemModel(resultObject);
    });
    return barItems;
  }
};

module.exports = ModelsContainer;