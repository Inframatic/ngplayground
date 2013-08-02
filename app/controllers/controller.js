var myModule = angular.module('myApp', []);

function BusinessCtrl($scope) {
    $scope.statusList = [ 
      {"applicationStatus": 'Applied' },
      {"applicationStatus": 'Not yet' } ];
    $scope.list = [
      {name:'Jesus Christ',industry:'comp sci', paid: "yes", location: "Boston",    company_size: 400, "applicationStatus": 'Applied'},
      {name:'GOD YWH', industry:'creator inc', paid: "no", location: "New York", company_size: 1100, "applicationStatus": 'Not yet'},
      {name:'Allah',industry:'Developer', paid: "yes", location: "Boston", company_size: 40, "applicationStatus": 'Not yet'},
      {name:'Hamburglar',industry:'Mcdonalds', paid: 'yes', location: "New", company_size: 100000, "applicationStatus": 'Not yet'}
    	];
}