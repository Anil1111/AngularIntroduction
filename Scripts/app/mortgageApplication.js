var myApp = angular.module('mortgageApplication', []);
myApp.controller("applicationController", [
    "$scope", function ($scope) {
        $scope.title = "calculatorController";
        $scope.Names = {};
        $scope.Names.Borrower = "Hans Solo";
        $scope.Names.CoBorrower = "Princess Leia";
        $scope.PropertyInformation = {};
        $scope.PropertyInformation.Address = "A Galaxy Far Far Away";
        $scope.PropertyInformation.City = "Coruscant";
        $scope.PropertyInformation.LegalDescription = "A Condo in the High Rise on the Planet City";
        $scope.PropertyInformation.LoanPurpose = "Purchase";
        $scope.PropertyInformation.Occupancy = "Occupied while not saving the Galaxy";
        $scope.PropertyInformation.OriginalCost = "";
        $scope.PropertyInformation.Zip = "";
        $scope.PropertyInformation.ExistingLiens = "";
        $scope.EmploymentHistory = [];

        var employmentHistoryItem = {};
        employmentHistoryItem.Name = "Rebellion";
        employmentHistoryItem.YearsOnJob = "5";
        employmentHistoryItem.YearsInProfession = "5";
        employmentHistoryItem.PositionTitle = "Rebellion General";
        $scope.EmploymentHistory.push(employmentHistoryItem);

        $scope.AddEmploymentHistory = function() {
            var employmentHistoryItem = {};
            employmentHistoryItem.Name = "New Job";
            employmentHistoryItem.YearsOnJob = "";
            employmentHistoryItem.YearsInProfession = "";
            employmentHistoryItem.PositionTitle = "New Position";
            $scope.EmploymentHistory.splice(0, 0, employmentHistoryItem);

        }

        
    }
]);