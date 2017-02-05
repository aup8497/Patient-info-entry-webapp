var app = angular.module('patientSubmit',[]);

		app.controller( 'HomeController' ,function($scope , $http){  //the parameters are basicallly services which we are using
			$scope.submitForm = function(){
				//console.log($scope.newMeow);//this logs the variable newMeow in the console

                //add conditions and change these
                console.log("came here for date");
				if(  !(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test( $scope.dob ) ) ) {
					$scope.dobtrue = true;
                    alert("Date not entered properly,try again !!");

                }
				else if(  !(/^\d+$/.test($scope.age) ) ){
                console.log("came here in age");
					$scope.agetrue=true;
                    alert("Age not entered properly,try again !!");

                }else{

                      var  firstname= $scope.firstName ;
                       var  lastname= $scope.lastName ;	
                        var age= $scope.age ;
                        var dob= $scope.dob ;
                       var  gender=$scope.gender ;
                       var phone=$scope.phone ;
                       var info = $scope.pInfo;


                    var dto={
                        firstname: firstname ,
                        lastname: lastname ,
                        age: age ,
                        dob: dob ,
                        gender:gender ,
                        phone:phone ,
                        info: info

                    };
                    $scope.firstName ="";
                    $scope.lastName ="";
                    $scope.age ="";
                    $scope.dob ="";
                    $scope.gender ="";
                    $scope.phone ="";
                    $scope.pInfo ="";

                    //this next line is sending the data to the server
                    $http.post('/data/save', dto).success(function (data, status) {
                        console.log("Successfully saved!!" + "\nStatus : " + status + "\nData : " + data);
                        alert("Successfully Registered!!");
                        // console.log("Registered on : "+ Date.now());
                    }).error(function (data, status) {
                        console.log("Error while Saving data!\n Error : " + status + " \nData : " + data);
                        alert("Could not save your data, try again!");

                    });


                }

			};


		});
