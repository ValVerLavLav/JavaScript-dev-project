// // I. - Access and Display Public Data
// const members = data.results[0].members;

// function generateSenateTable (members) {
//   var table = document.getElementById("senate-data");
//   table.innerHTML = "";

//   if (members != null) {
//   for (var i = 0; i < members.length; i++) {
//           var row = table.insertRow(0);
//           var cell = row.insertCell(0);

//           //add full name on 1th cell

//           cell.innerHTML =  members[i].last_name;
          
//           var cell1 = row.insertCell(1);
//           cell1.innerHTML =  members[i].first_name;
          
//           var cell2 = row.insertCell(2);
//           cell2.innerHTML =  members[i].middle_name;
  
//           var cell3 = row.insertCell(3);
//           cell3.innerHTML =  members[i].party;

//           var cell4 = row.insertCell(4);
//           cell4.innerHTML =  members[i].state;

//           var cell5 = row.insertCell(5);
//           cell5.innerHTML =  members[i].seniority;
          
//           var cell6 = row.insertCell(6);
//           cell6.innerHTML =  members[i].votes_with_party_pct;
//       };
//     } else {
//       //No Array so show warning
//     }
//   };

// generateSenateTable(members);

// var getDemocrats = document.getElementById("displayDemocrats");
// var getRepublicans = document.getElementById("displayRepublicans");
// var getIndependents = document.getElementById("displayIndependents");

// var getStateOfOrigin = document.getElementById("stateOfOrigin");
// //get DD selector

// getDemocrats.addEventListener('click', function() {
//   generateSenateTable(filterMembers())
// })
// getRepublicans.addEventListener('click', function() {
//   generateSenateTable(filterMembers())
// })
// getIndependents.addEventListener('click', function() {
//   generateSenateTable(filterMembers())
// })


// getStateOfOrigin.addEventListener('change', function () {
//   generateSenateTable(filterMembers())
// })
// //Add change ability to the DD selector



// function filterMembers () {
//   var getMembers = [];

//   for (var i = 0; i < members.length; i++) {
//     if (getStateOfOrigin.value == members[i].state || getStateOfOrigin.value == "") {
      
//       if (getDemocrats.checked && members[i].party === "D") {
//           getMembers.push(members[i]);
//         } 
//       if (getRepublicans.checked && members[i].party === "R") {
//           getMembers.push(members[i]);
//         } 
//       if (getIndependents.checked && members[i].party === "I") {
//           getMembers.push(members[i]);
//         }
//     }
//   }

// return getMembers.length > 0 ? getMembers : null;
// }

//////////////////////////////////////////////////////////////////////////////////////////////


// II. - Calculate and Display Statistics

var statistics =
{
  "Number_of_Members": 0,
  "Number_of_Democrats": 0,
  "Number_of_Republicans": 0,
  "Number_of_Independents": 0,
  "Average_number_of_Members_consistent_with_party": 0,
  "Average_number_of_Democrats_consistent_with_party": 0,
  "Average_number_of_Republicans_consistent_with_party": 0,
  "Average_number_of_Independents_consistent_with_party": 0,
}

// 2. - Get the Numbers of Members in Each Party
function calculateStatistics() {
  var listOfDemocrats = [];
  var listOfRepublicans = [];
  var listOfIndependents = [];
  var listOfMembers = [];

  var sumOfConsistencyOfDemocrats = 0;
  var sumOfConsistencyOfRepublicans = 0;
  var consistencyOfDemocrats = 0;
  var consistencyOfRepublicans = 0;

  var disloyalDemocrats = [];
  var loyalDemocrats = [];
  var disloyalRepublicans = [];
  var loyalRepublicans = [];

  var mostAbsentDemocrats = [];
  var leastAbsentDemocrats = [];
  var mostAbsentRepublicans = [];
  let leastAbsentRepublicans = [];

  members.forEach(function(member) {
    if (member.party === "D") {
      listOfDemocrats.push(member);
      sumOfConsistencyOfDemocrats += member.votes_with_party_pct;
    }
    if (member.party === "R") {
      listOfRepublicans.push(member);
    }
    if (member.party === "I") {
      listOfIndependents.push(member);
    }
    listOfMembers.push(member);
  });


  var numberOfDemocrats = listOfDemocrats.length;
  var numberOfRepublicans = listOfRepublicans.length;
  var numberOfIndependents = listOfIndependents.length;
  statistics['Number_of_Members'] = numberOfMembers;
  statistics['Number_of_Democrats'] = numberOfDemocrats;
  statistics['Number_of_Republicans'] = numberOfRepublicans;
  statistics['Number_of_Independents'] = numberOfIndependents;
  statistics['Average_number_of_Members_consistent_with_party'] = numberOfDemocrats;
  statistics['Average_number_of_Democrats_consistent_with_party'] = numberOfDemocrats;
  statistics['Average_number_of_Republicans_consistent_with_party'] = numberOfDemocrats;
  statistics['Average_number_of_Independents_consistent_with_party'] = numberOfDemocrats;

  };
  // console.log(listOfDemocrats);
  // console.log(listOfRepublicans);
  // console.log(listOfIndependents);
  // console.log(numberOfDemocrats);
  // console.log(numberOfRepublicans);
  // console.log(numberOfIndependents);


  function calculateTenPercent(members) {
    let tenPercentArray = [];

    // for loop

    return tenPercentArray;
  }


  function createMainTable() {

  }

  function createTenPercentTable() {

  }


3. - Loyalty 1 - Calculate the Average 'Votes with Party' for Each Party
function getConsistency () {
  results.forEach (function() {
    if (members[i].party === "D") {
      sumOfConsistencyOfDemocrats = sumOfConsistencyOfDemocrats + members[i].votes_with_party_pct;
    }
    if (members[i].party === "R") {
      sumOfConsistencyOfRepublicans = sumOfConsistencyOfRepublicans + members[i].votes_with_party_pct;
    }
    var consistencyOfDemocrats = (sumOfConsistencyOfDemocrats)/(numberOfDemocrats);
    var consistencyOfRepublicans = (sumOfConsistencyOfRepublicans)/(numberOfRepublicans);
});
console.log(consistencyOfDemocrats);
console.log(consistencyOfRepublicans);





// 4. - Loyalty 2 - Identify the Members Who Least Often Vote with Their Party + the ones who most often voted for the party
function getDisloyalDemocrats () {
  var democratsDisloyaltyMinValue = listOfDemocrats.votes_with_party_pct.values.min();
  if (members[i].party === "D") {
    while (disloyalDemocrats.length < (numbersOfDemocrats/10)) {
      if (members[i].votes_with_party_pct <= democratsDisloyaltyMinValue) {
        members[i].push(disloyalDemocrats);
    }
    var democratsDisloyaltyMinValue = disloyalDemocrats[i+1].votes_with_party_pct;
  }
  if (disloyalDemocrats[i].votes_with_party_pct === democratsDisloyaltyMinValue) {
    members[i].push(disloyalDemocrats);
  }
}
};
// console.log(getDisloyalDemocrats);



function getLoyalDemocrats () {
  var democratsLoyaltyMaxValue = listOfDemocrats.votes_with_party_pct.values.max();
  if (members[i].party === "D") {
    while (loyalDemocrats.length < (numbersOfDemocrats/10)) {
      if (members[i].votes_with_party_pct >= democratsLoyaltyMaxValue) {
        members[i].push(loyalDemocrats);
    }
    var democratsLoyaltyMaxValue = loyalDemocrats[i+1].votes_with_party_pct;
  }
  if (loyalDemocrats[i].votes_with_party_pct === democratsLoyaltyMaxValue) {
    members[i].push(loyalDemocrats);
}
};
// console.log(getLoyalDemocrats);



function getDisloyalRepublicans () {
  var republicansDisloyaltyMinValue = listOfRepublicans.votes_with_party_pct.values.min();
  if (members[i].party === "R") {
    while (disloyalRepublicans.length < (numbersOfRepublicans/10)) {
      if (members[i].votes_with_party_pct <= republicansDisloyaltyMinValue) {
        members[i].push(disloyalRepublicans);
    }
    var republicansDisloyaltyMinValue = disloyalRepublicans[i+1].votes_with_party_pct;
  }
  if (disloyalRepublicans[i].votes_with_party_pct === republicansDisloyaltyMinValue) {
    members[i].push(disloyalRepublicans);
}
};
// console.log(getDisloyalRepublicans);



function getLoyalRepublicans () {
  var republicansLoyaltyMaxValue = listOfRepublicans.votes_with_party_pct.values.max();
  if (members[i].party === "R") {
    while (loyalRepublicans.length < (numbersOfRepublicans/10)) {
      if (members[i].votes_with_party_pct >= republicansLoyaltyMaxValue) {
        members[i].push(loyalRepublicans);
    }
    var republicansLoyaltyMaxValue = loyalRepublicans[i+1].votes_with_party_pct;
  }
  if (loyalRepublicans[i].votes_with_party_pct === republicansLoyaltyMaxValue) {
    members[i].push(loyalRepublicans);
}
};
// console.log(getLoyalRepublicans);



// 5. Attendance - Which members missed the most votes + which members have listed the least votes
function getMostAbsentDemocrats () {
  var democratsAbsentMaxValue = listOfDemocrats.missed_votes.values.max();
  if (members[i].party === "D") {
    while (mostAbsentDemocrats.length < (numbersOfDemocrats/10)) {
      if (members[i].missed_votes >= democratsAbsentMaxValue) {
        members[i].push(mostAbsentDemocrats);
    }
    var democratsAbsentMaxValue = mostAbsentDemocrats[i+1].missed_votes;
  }
  if (mostAbsentDemocrats[i].missed_votes === democratsAbsentMaxValue) {
    members[i].push(mostAbsentDemocrats);
}
};
// console.log(getMostAbsentDemocrats);



function getLeastAbsentDemocrats () {
  var democratsAbsentMinValue = listOfDemocrats.missed_votes.values.min();
  if (members[i].party === "D") {
    while (leastAbsentDemocrats.length < (numbersOfDemocrats/10)) {
      if (members[i].missed_votes <= democratsAbsentMinValue) {
        members[i].push(leastAbsentDemocrats);
    }
    var democratsAbsentMinValue = leastAbsentDemocrats[i+1].nissed_votes;
  }
  if (leastAbsentDemocrats[i].missed_votes === democratsAbsentMinValue) {
    members[i].push(leastAbsentDemocrats);
}
};
// console.log(getLeastAbsentDemocrats);



function getMostAbsentRepublicans () {
  var republicansAbsentMaxValue = listOfRepublicans.missed_votes.values.max();
  if (members[i].party === "R") {
    while (mostAbsentRepublicans.length < (numbersOfRepublicans/10)) {
      if (members[i].missed_votes >= republicansAbsentMaxValue) {
        members[i].push(mostAbsentRepublicans);
    }
    var republicansAbsentMaxValue = mostAbsentRepublicans[i+1].missed_votes;
  }
  if (mostAbsentRepublicans[i].missed_votes === republicansAbsentMaxValue) {
    members[i].push(mostAbsentRepublicans);

}
};
// console.log(getMostAbsentRepublicans);



function getLeastAbsentRepublicans () {
  var republicansAbsentMinValue = listOfRepublicans.missed_votes.values.min();
  if (members[i].party === "D") {
    while (leastAbsentRepublicans.length < (numbersOfRepublicans/10)) {
      if (members[i].missed_votes <= republicansAbsentMinValue) {
        members[i].push(leastAbsentRepublicans);
    }
    var republicansAbsentMinValue = leastAbsentRepublicans[i+1].nissed_votes;
  }
  if (leastAbsentRepublicans[i].missed_votes === republicansAbsentMinValue) {
    members[i].push(leastAbsentDemocrats);
  }
}
}
// console.log(getLeastAbsentRepublicans);