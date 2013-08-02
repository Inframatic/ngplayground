var myModule = angular.module('myApp', []);

function BusinessCtrl($scope) {
    $scope.statusList = [ 
      {"paidvolunteer": 'Paid' },
      {"paidvolunteer": 'Volunteer' } ];
    $scope.list = [
      {name:'Jesus Christ',industry:'comp sci', "paidvolunteer": 'Paid', location: "Boston",    company_size: 400, "applicationStatus": 'Applied'},
      {name:'GOD YWH', industry:'creator inc', "paidvolunteer": 'Volunteer', location: "New York", company_size: 1100, "applicationStatus": 'Not yet'},
      {name:'Allah',industry:'Developer', "paidvolunteer": 'Paid', location: "Boston", company_size: 40, "applicationStatus": 'Not yet'},
      {name:'Hamburglar',industry:'Mcdonalds', "paidvolunteer": 'Volunteer', location: "New", company_size: 100000, "applicationStatus": 'Not yet'}
    	];
}