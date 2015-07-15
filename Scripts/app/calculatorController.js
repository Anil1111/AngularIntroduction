
var myApp = angular.module('mortgageCalculator', []);
    myApp.controller("calculatorController", [
        "$scope", function($scope) {
            $scope.title = "calculatorController";
            $scope.amount = 100000;
            $scope.term = 30;
            $scope.rate = 4.5;
            $scope.errorMessage = "";


            $scope.calculatePayment = function () {
                $scope.errorMessage = "";
                var effectiveRate = ($scope.rate / 100) / 12;
                var numberOfMonths = $scope.term * 12;
                var numerator = effectiveRate *
                    Math.pow(effectiveRate + 1, numberOfMonths);
                var denominator =
                    Math.pow(1 + effectiveRate, numberOfMonths) - 1;
                
                $scope.payment = $scope.amount * (numerator / denominator);
                if ($scope.payment > 10000) {
                    $scope.errorMessage = "Wow!  That's a high payment";
                }
                if (isNaN($scope.payment)) {
                    $scope.errorMessage = "Error";
                }
                if ($scope.payment == Infinity) {
                    $scope.errorMessage = "Error";
                }
            };
            $scope.calculatePayment();
        }
    ]);

