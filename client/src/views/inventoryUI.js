var ModelsContainer = require('../models/models_container')

var InventoryUI = function(player, bar){
  this.player = player;
  this.bar = bar;
  
  var modelsContainer = new ModelsContainer;

  modelsContainer.allPlayerItems(function(playerItems){
    this.renderPlayerItemsImages(playerItems);
    this.renderPlayerItemsCountDropdown(playerItems);
  }.bind(this));
  
  modelsContainer.allBarItems(function(barItems){
    this.renderBarItemsCountDropdown(barItems);
    this.renderBarItemsImages(barItems);
  }.bind(this)); 

};

InventoryUI.prototype = {
  renderPlayerItemsCountDropdown: function(playerItems){
        var select = document.getElementById("player-inventory-dropdown");
        select.innerHTML = "";

        var playerItemsWithCount = this.addCounts(playerItems)
        var playerItemsFiltered = this.filterToUniqList(playerItemsWithCount)

        for (var item of playerItemsFiltered){
          var option = document.createElement('option');
          option.innerText = item.name + ' (' + item.count + ')';
          option.value = item.id;
          // option.value = JSON.stringify(item);
          select.appendChild(option);
        }
      },
  renderPlayerItemsImages: function(playerItems){
   var tablePicture = document.getElementById("player-inventory-picture")
   tablePicture.innerHTML = ""

    var playerItemsWithCount = this.addCounts(playerItems)
    var playerItemsFiltered = this.filterToUniqList(playerItemsWithCount)
    for (var item of playerItemsFiltered){
      if (item.name === "Beer"){
        var imageBeerButton = document.createElement('button')
        var imageBeerP = document.createElement('p')
        var imageBeerCount = document.createElement('p')
        this.setupPlayerTableCellButton(imageBeerButton, imageBeerP, item.name, item.count, imageBeerCount, "<img src = /public/img/edited_images/beer.png>");
      }
      else if (item.name === "Wine"){
        var imageWineButton = document.createElement('button')
        var imageWineP = document.createElement('p')
        var imageWineCount = document.createElement('p')
        this.setupPlayerTableCellButton(imageWineButton, imageWineP, item.name, item.count, imageWineCount, "<img src = /public/img/edited_images/wine.png>");
      } 
      else if (item.name === "Coke"){
        var imageCokeButton = document.createElement('button')
        var imageCokeP = document.createElement('p')
        var imageCokeCount = document.createElement('p')

        this.setupPlayerTableCellButton(imageCokeButton, imageCokeP, item.name, item.count, imageCokeCount, "<img src = /public/img/edited_images/coke.png>");
      }  
      else if (item.name === "Apple Juice"){
        var imageAppleJuiceButton = document.createElement('button')
        var imageAppleJuiceP = document.createElement('p')
        var imageAppleJuiceCount = document.createElement('p')

        this.setupPlayerTableCellButton(imageAppleJuiceButton, imageAppleJuiceP, item.name, item.count, imageAppleJuiceCount, "<img src = /public/img/edited_images/apple_juice.png>");
      } 
      else if (item.name === "Long Island Iced Tea"){
        var imageLongIslandIcedTeaButton = document.createElement('button')
        var imageLongIslandIcedTeaP = document.createElement('p')
        var imageLongIslandIcedTeaCount = document.createElement('p')

        this.setupPlayerTableCellButton(imageLongIslandIcedTeaButton, imageLongIslandIcedTeaP, item.name, item.count, imageLongIslandIcedTeaCount,  "<img src = /public/img/edited_images/long_island.png>");
      }
      else if (item.name === "Pina Colada"){
        var imagePinaColadaButton = document.createElement('button')
        var imagePinaColadaP = document.createElement('p')
        var imagePinaColadaCount = document.createElement('p')


        this.setupPlayerTableCellButton(imagePinaColadaButton, imagePinaColadaP, item.name, item.count, imagePinaColadaCount, "<img src = /public/img/edited_images/pina_colada.png>");
      }
    }
  },

  renderBarItemsImages: function(barItems){
    var barTable = document.getElementById("bar-inventory-table");
    barTable.innerHTML = "";
    var rowInUse = document.createElement("tr");

    var barItems = this.addCounts(barItems);
    var barItemsFiltered = this.filterToUniqList(barItems);

    var columnPositionCounter = 0;

    for (var item of barItemsFiltered){
      columnPositionCounter += 1

      if (columnPositionCounter <= 3){
        if (item.name === "Beer"){
            var imageBeerButton = document.createElement('button')
            this.setupBarTableCellButton(imageBeerButton, "<img src = /public/img/edited_images/beer.png>",rowInUse);
        }
        else if (item.name === "Wine"){
          var imageWineButton = document.createElement('button')
          this.setupBarTableCellButton(imageWineButton, "<img src = /public/img/edited_images/wine.png>", rowInUse);
        } 
        else if (item.name === "Coke"){
          var imageCokeButton = document.createElement('button')
          this.setupBarTableCellButton(imageCokeButton, "<img src = /public/img/edited_images/coke.png>", rowInUse);
        }  
        else if (item.name === "Apple Juice"){
          var imageAppleJuiceButton = document.createElement('button')
          this.setupBarTableCellButton(imageAppleJuiceButton, "<img src = /public/img/edited_images/apple_juice.png>", rowInUse);
        } 
        else if (item.name === "Long Island Iced Tea"){
          var imageLongIslandIcedTeaButton = document.createElement('button')
          this.setupBarTableCellButton(imageLongIslandIcedTeaButton, "<img src = /public/img/edited_images/long_island.png>", rowInUse);
        }
        else if (item.name === "Pina Colada"){
          var imagePinaColadaButton = document.createElement('button')
          this.setupBarTableCellButton(imagePinaColadaButton, "<img src = /public/img/edited_images/pina_colada.png>", rowInUse);
        }
        else {
        var td = document.createElement('td')
        this.setupBarTableCellButton(imageDrinkButton, "<img src = http://icons.iconarchive.com/icons/iconshock/brilliant-food/256/beer-icon.png>", rowInUse)
        }
      } 

      else {
        columnPositionCounter = 0;
        rowInUse = document.createElement('tr')
        if (item.name === "Beer"){
            var imageBeerButton = document.createElement('button')
            this.setupBarTableCellButton(imageBeerButton, "<img src = /public/img/edited_images/beer.png>",rowInUse);
        }
        else if (item.name === "Wine"){
          var imageWineButton = document.createElement('button')
          this.setupBarTableCellButton(imageWineButton, "<img src = /public/img/edited_images/wine.png>", rowInUse);
        } 
        else if (item.name === "Coke"){
          var imageCokeButton = document.createElement('button')
          this.setupBarTableCellButton(imageCokeButton, "<img src = /public/img/edited_images/coke.png>", rowInUse);
        }  
        else if (item.name === "Apple Juice"){
          var imageAppleJuiceButton = document.createElement('button')
          this.setupBarTableCellButton(imageAppleJuiceButton, "<img src = /public/img/edited_images/apple_juice.png>", rowInUse);
        } 
        else if (item.name === "Long Island Iced Tea"){
          var imageLongIslandIcedTeaButton = document.createElement('button')
          this.setupBarTableCellButton(imageLongIslandIcedTeaButton, "<img src = /public/img/edited_images/long_island.png>", rowInUse);
        }
        else if (item.name === "Pina Colada"){
          var imagePinaColadaButton = document.createElement('button')
          this.setupBarTableCellButton(imagePinaColadaButton, "<img src = /public/img/edited_images/pina_colada.png>", rowInUse);
        }
        else {
        var td = document.createElement('td')
        this.setupBarTableCellButton(imageDrinkButton, "<img src = http://icons.iconarchive.com/icons/iconshock/brilliant-food/256/beer-icon.png>", rowInUse)
        } 
      }
    }
  },
  renderBarItemsCountDropdown: function(barItems){
    var select = document.getElementById("bar-inventory-dropdown");
    select.innerHTML = "";

    var barItemsWithCount = this.addCounts(barItems)
    var barItemsFiltered = this.filterToUniqList(barItemsWithCount)

    for (var item of barItemsFiltered){
      var option = document.createElement("option");
      option.innerText = item.name + ' (' + item.count + ')';
      option.value = item.id;
      select.appendChild(option);
    }
  },

  addOnClickBarButtonsToBuyDrink: function(callback){
    var barTable = document.getElementById("bar-inventory-table");
    var rowNumber = -1; 
    var buttonNames = [];
    for (var i = 0, row; row = barTable.rows[i]; i++) { 
       for (var d = 0, td; td = row.cells[d]; d++) {
        rowNumber += 1;
        var cellIndex = rowNumber;
        buttonNames.push(cellIndex)
        buttonNames[cellIndex] = td.children[0]
       }  
    }
    buttonNames.forEach(function(button){
      button.onclick = function(event){
console.log('button click', button.value)
        callback(button.value);
      }
    });
  },
  addOnClickBarButtonsTellGoToBar: function(callback){
console.log('in remove event listener')
    var barTable = document.getElementById("bar-inventory-table");
    var rowNumber = -1; 
    var buttonNames = [];
    for (var i = 0, row; row = barTable.rows[i]; i++) { 
       for (var d = 0, td; td = row.cells[d]; d++) {
        rowNumber += 1;
        var cellIndex = rowNumber;
        buttonNames.push(cellIndex);
        buttonNames[cellIndex] = td.children[0]
       }  
    }
console.log('all buttons?',buttonNames)
    buttonNames.forEach(function(button){
          button.onclick = function(event){
    console.log('button click remove', button.value)
            callback("Please order a drink from the bar");
          }
    });
  },

  addCounts: function (items) {
    for (item of items) {
      item.count = this.countItems(items, item);
    }
    return items;
  },
  countItems: function (allItems, item) {
    counter = 0
    for (var i = 0; i < allItems.length; i++){
      if (allItems[i].name == item.name)
        counter += 1;
    }
    return counter;
  },
  filterToUniqList: function(itemList){
    var itemNames = itemList.map(function (item) {
      return item.name
    })

    var filtered = itemList.filter(function (item, index)  {
      return itemNames.indexOf(item.name) == index
    })      
    return filtered
  },
  setupPlayerTableCellButton: function(button, p, info, number, p2, src){
    var playerTablePicture = document.getElementById("player-inventory-picture")
    var td = document.createElement('td');
    p.innerText = info;
    button.innerHTML = src;
    p2.innerText = "["+number+"]";
    td.appendChild(p);
    td.appendChild(button);
    td.appendChild(p2);
    playerTablePicture.appendChild(td);
  },

  setupBarTableCellButton: function(button, src, rowInUse){
    var barTablePicture = document.getElementById("bar-inventory-table")
    var td = document.createElement('td');
    button.innerHTML = src;
    td.className += ('bar-inventory-image');

    td.appendChild(button);
    rowInUse.appendChild(td);
    barTablePicture.appendChild(rowInUse);
  },
};


module.exports = InventoryUI;