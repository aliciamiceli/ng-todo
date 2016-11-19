'use strict';

app.controller("ItemListCtrl", function($scope, ItemFactory){
  $scope.welcome = "hello";
  $scope.items = [];


let getItems = function(){
  ItemFactory.getItemList().then(function(fbItems){
    $scope.items = fbItems;
  });
};

getItems();

  $scope.allItems = function(){
    console.log("you clicked all items");
    $scope.showListView = true;
  };

  $scope.newItem = function(){
    console.log("you clicked new item");
    $scope.showListView = false;
  };


$scope.deleteItem = function(itemID){
  console.log("you deleted me", itemID);
  ItemFactory.deleteItem(itemID).then(function(response){
    getItems();
  });
};
});