
var app = angular.module('patientInfo',[]);

app.controller( 'InfoController' ,function($scope , $http){  //the parameters are basicallly services which we are using

    // REPLACE THIS BY SEARCH FUNCTIONALITY AND array of patient object
    //    $scope.patients=[
    //     {
    //         firstname:"ak" ,
    //         lastname :"asd",
    //         age:45,
    //         dob:"12-34-3409",
    //         gender:"Male",
    //         phone:98274937234,
    //         otherinfo:"this is other info"
    //     },
    //     {
    //         firstname:"ak" ,
    //         lastname :"asd",
    //         age:45,
    //         dob:"12-34-3409",
    //         gender:"Male",
    //         phone:98274937234,
    //         otherinfo:"this is other info"
    //     },
    //     {
    //         firstname:"ak" ,
    //         lastname :"asd",
    //         age:45,
    //         dob:"12-34-3409",
    //         gender:"Male",
    //         phone:98274937234,
    //         otherinfo:"this is other info"
    //     }
    // ];
    //

        function getPatients(){
            console.log('patients');
            $http.get('data/get').then(function(response){
                $scope.patients=(response.data);
            });
            //this is an API call


        }



        getPatients();

    $scope.removeRow = function(phoneNumber){
        
    };


});