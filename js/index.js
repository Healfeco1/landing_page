var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.stars = 5;

  $scope.person = {
    katrin: {
      id: 12345,
      name: "Katrin Davidsdottir",
      description:
        "Katrin: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 3,
      image: "Katrín.jpg"
    },
    sara: {
      id: 123,
      name: "Sara Sigmundsdottir",
      description:
        "Sara: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 2,
      image: "Sara.jpg"
    },
    annie: {
      id: 123,
      name: "Annie Thorisdottir",
      description:
        "annie: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 3,
      image: "annie.jpg"
    },
    brooke: {
      id: 123,
      name: "Brooke Ence",
      description:
        "Brooke: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 4,
      image: "brooke_ence.jpg"
    },
    tia_toomey: {
      id: 123,
      name: "Tia-Clair Toomey",
      description:
        "Tia: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 5,
      image: "tia.jpg"
    },
    katrine_davidsdotir: {
      id: 123,
      name: "Katrine Davíðsdóttir",
      description:
        "Katrine: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      stars: 2,
      image: "Katrín1.jpg"
    }
  };
  console.log($scope.person);
});

//   firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"

/* 











*/
