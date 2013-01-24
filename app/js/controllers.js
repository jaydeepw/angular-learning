'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function nameManager($scope) {
	$scope.names = ["Jay", "Sandy", "Aades", "Sarang"];
	console.log("log statements are printed in Angular.");

	$scope.printName = function(name) {
		console.log(name + " has been clicked");
	}
}