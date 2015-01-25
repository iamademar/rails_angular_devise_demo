( function() {
  'use strict';

  angular.module('public.ctrl.signUp', ['Devise'])
  .controller('signUpCtrl', ['Auth', '$scope', '$location', 
    function(Auth, $scope, $location) {
      // Variable to hold the email and password
      this.credentials = {};

      // Check if user is already signed-in
      Auth.currentUser().then(function(user) {
        $location.path("/");
        alert("You are already signed in!")
      }, function(error) {
        // log error here
      });

      this.signUp = function() {
        Auth.register(this.credentials).then(function(registeredUser) {
          $location.path("/");
          alert("Successfully signed up!");
        }, function(error) {
          alert("Error in signing up!");
        });
      };

    }
  ]);
})();