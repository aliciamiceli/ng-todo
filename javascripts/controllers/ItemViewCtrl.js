'use strict';

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory){
  $scope.selectedItem = {};
  var itemId = $routeParams.id;
  console.log("$routeParams", itemId);
  console.log("controller working");

  ItemFactory.getSingleItem(itemId).then(function(oneItem){
    oneItem.id = itemId;
    $scope.selectedItem = oneItem;
    console.log("oneItem", oneItem);
  });
});