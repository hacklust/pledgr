'use strict';

angular.module('pledgrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ActivitiesCtrl', function ($scope){
    $scope.activities = [{id:"1",title:"Hack4Cause",theme:"LetshackforYolandasurvivors.",location:"Makati,Philippines",start_date:"2013-11-2408: 00: 00",end_date:"2013-11-2516: 00: 00",description:"Overnightallowed.Blahblah.FreeLumiaphones.",organization_id:"1",category:"",image:"yeoman.png",date_created:"2013-11-23",date_updated:"2013-11-2311: 06: 47"},{id:"1",title:"Hack4Cause",theme:"LetshackforYolandasurvivors.",location:"Makati,Philippines",start_date:"2013-11-2408: 00: 00",end_date:"2013-11-2516: 00: 00",description:"Overnightallowed.Blahblah.FreeLumiaphones.",organization_id:"1",category:"",image:"yeoman.png",date_created:"2013-11-23",date_updated:"2013-11-2311: 06: 47"},{id:"1",title:"Hack4Cause",theme:"LetshackforYolandasurvivors.",location:"Makati,Philippines",start_date:"2013-11-2408: 00: 00",end_date:"2013-11-2516: 00: 00",description:"Overnightallowed.Blahblah.FreeLumiaphones.",organization_id:"1",category:"",image:"yeoman.png",date_created:"2013-11-23",date_updated:"2013-11-2311: 06: 47"},{id:"1",title:"Hack4Cause",theme:"LetshackforYolandasurvivors.",location:"Makati,Philippines",start_date:"2013-11-2408: 00: 00",end_date:"2013-11-2516: 00: 00",description:"Overnightallowed.Blahblah.FreeLumiaphones.",organization_id:"1",category:"",image:"yeoman.png",date_created:"2013-11-23",date_updated:"2013-11-2311: 06: 47"}]
  })
  .controller('PledgesCtrl', function ($scope) {
    $scope.pledges = [{"id":"1","date_created":"2013-06-01 05:47:48","volunteer":{"id":"1","fbid":"0","name":"Aaron Noel De Leon","email":"hello@nelonoel.com","password":"blahblah","location":"Taytay, Rizal","bio":"Founder of pledgr.com","image":"0","mobile":"09168375550","birthday":"1994-05-15","last_login":"","date_created":"2013-11-23","date_updated":"2013-11-23 10:58:13"},"activity":{"id":"1","title":"Hack4Cause","theme":"Lets hack for Yolanda survivors.","location":"Makati, Philippines","start_date":"2013-11-24 08:00:00","end_date":"2013-11-25 16:00:00","description":"Overnight allowed. Blah blah. Free Lumia phones.","organization_id":"1","category":"","image":"","date_created":"2013-11-23","date_updated":"2013-11-23 11:06:47"}}]
  })
  ;

