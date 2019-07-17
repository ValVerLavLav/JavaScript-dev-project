const members = data.results[0].members;

document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
for (var i = 0; i < data.results[0].members.length; i++) {

var allData = data.results[0].members[i];
console.log(allData.first_name);
}
// This displays all the JSON data in the browser.


// // function generateSenateTable (data) {
//     var table = document.getElementById("senate-data");
//     table.innerHTML = "";

// // console.log('ghghg')
//     for (var i = 0; i < data.results[0].members.length; i++) {
//         var row = table.insertRow(0);
//         var cell = row.insertCell(0);
//         cell.innerHTML = data.results[0].members[i].last_name;

//         // var firstName = firstName.insertCell(i);
//         // var senatorFirstName = document.createElement(data.results[i].first_name);
//         var cell1 = row.insertCell(1);
//         cell1.innerHTML = data.results[0].members[i].first_name;
        
//         // var middleName = middleName.insertCell(i);
//         // var senatorMiddleName = document.createElement(data.results[i].middle_name);
//         var cell2 = row.insertCell(2);
//         cell2.innerHTML = data.results[0].members[i].middle_name;
        
//         // var partyAffiliation = partyAffiliation.insertCell(i);
//         // var senatorPartyAffiliation = document.createElement(data.results[i].party);
//         var cell3 = row.insertCell(3);
//         cell3.innerHTML = data.results[0].members[i].party;

//         // var stateOfOrigin = stateOfOrigin.insertCell(i);
//         // var senatorStateOfOrigin = document.createElement(data.results[i].state);
//         var cell4 = row.insertCell(4);
//         cell4.innerHTML = data.results[0].members[i].state;

//         // var seniority = seniority.insertCell(i);
//         // var senatorSeniority = document.createElement(data.results[i].seniority);
//         var cell5 = row.insertCell(5);
//         cell5.innerHTML = data.results[0].members[i].seniority;
        
//         // var consistencyWithParty = consistencyWithParty.insertCell(i);
//         // var senatorConsistencyWithParty = document.createElement(data.results[i].votes_with_party_pct);
//         var cell6 = row.insertCell(6);
//         cell6.innerHTML = data.results[0].members[i].votes_with_party_pct;
//     };
// };
// generateSenateTable(data);


    
// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
// for (var i = 0; i < data.results[0].members.length; i++)
// {
//   var allData = data.results[0].members[i];
//   console.log(allData.first_name);
// }

// This is somekind of generic loop.
// This will return all the data for all members.
// And display the result for the all members.

// One usually keep the console.log inside the loop, because you would rather display all the results, not just the first one.



// ----- Other loops -----

// for (var i = 0; i < data.results[0].members.length; i++)
// {
//   var allData = data.results[0].members[i];
// }
// console.log(allData.first_name);

// This will return all the data for all members.
// And display the result for the first member.






// for (var i = 0; i < data.results[0].members.length; i++)
// {
//   var allDataFirstName = data.results[0].members[i].first_name;
// }

// This will get me all the first names of all members.





// for (var i = 0; i < data.results[0].members.length; i++)
// {
//   var allDataFirstNameOfFirstMember = data.results[0].members[0].first_name;
// }

// This will get me the first name of the first member.





// In order to transform the data variable's contents into a string and thus easier to read, use the stringify option.
// JSON.stringify(data,null,2)


// In order to write JavaScript that stores text into an HTML element, you can use getElementbyId.
// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);




// N. P.  This is a snippet I coded to filter a list of items (NetNinja)

// document.forms['partyFilter']
//     const checkBox = document.forms['partyFilter'].querySelector('input');
//       checkBox.addEventListener('onClick', function (pF) {
//         const checkBoxClick = pF.target.value.display();
//         const congressMembers = list.getElementById('input')
//         Array.from(congressMembers).forEach(function(member) {
//           const politicalParty = member.firstElementChild.onclick;
//           if (politicalParty.display().indexOf(checkBoxClick) != -1) {
//             politicalParty.style.display = 'block';
//           } else {
//             politicalParty.style.display = 'none';
//           }
//         }
//       };





// N. P.  This is a snippet I coded to append a event listener to a form

// const checkBox = document.forms['partyFilter']
//     checkBox.addEventListener('onClick', function (pF) {
//       e.preventDefault();
//       const value = checkBox.querySelector(':checked').value;
//       Array.from(document.querySelectorAll('input[name=party]:checked')).map(elt => elt.value)
//       console.log(elt.value);
//     });





// N. P.  This is a snippet I coded to create a filter box. It doesn't work

// document.getElementsByClassName('partyFilter').onchange = function (evtParty) {
//     const partyValue = document.querySelectorAll('input[name=party]:checked')
//     Array.from(document.querySelectorAll('input[name=party]:checked')).forEach(partyValue => partyValue.value)
//     i = 0;
//     if (evtParty.target.checked) {
//       function getCheckedBoxes() {
//         var checkBoxes = document.getElementBy
//       }
  
//       partyValue[i].value.style.display = 'block';
    
//     } else {
//       partyValue[i].value.style.display = 'none';
//     }
//   };
  







// function getMembers () {
//     var checkedBoxes = document.querySelectorAll('input[name=party]:checked');
    
//   }




// const members = data.results[0].members;

// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
// var results = {};
/*
function generateSenateTable (data) {
    var table = document.getElementById("senate-data");
    table.innerHTML = "";

    for (var i = 0; i < data.results[0].members.length; i++) {
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = data.results[0].members[i].last_name;
        
        // var firstName = firstName.insertCell(i);
        // var senatorFirstName = document.createElement(data.results[i].first_name);
        var cell1 = row.insertCell(1);
        cell1.innerHTML = data.results[0].members[i].first_name;
        



        // var middleName = middleName.insertCell(i);
        // var senatorMiddleName = document.createElement(data.results[i].middle_name);
        var cell2 = row.insertCell(2);
        cell2.innerHTML = data.results[0].members[i].middle_name;
        



        // var partyAffiliation = partyAffiliation.insertCell(i);
        // var senatorPartyAffiliation = document.createElement(data.results[i].party);
        var cell3 = row.insertCell(3);
        cell3.innerHTML = data.results[0].members[i].party;
        // partyAffiliation.classList.add('politicalParty');        
        // Class for party affiliation




        // var stateOfOrigin = stateOfOrigin.insertCell(i);
        // var senatorStateOfOrigin = document.createElement(data.results[i].state);
        var cell4 = row.insertCell(4);
        cell4.innerHTML = data.results[0].members[i].state;    
        // stateAffiliation.classList.add('stateOfOrigin');
        // Class for state filter




        // var seniority = seniority.insertCell(i);
        // var senatorSeniority = document.createElement(data.results[i].seniority);
        var cell5 = row.insertCell(5);
        cell5.innerHTML = data.results[0].members[i].seniority;
        



        // var consistencyWithParty = consistencyWithParty.insertCell(i);
        // var senatorConsistencyWithParty = document.createElement(data.results[i].votes_with_party_pct);
        var cell6 = row.insertCell(6);
        cell6.innerHTML = data.results[0].members[i].votes_with_party_pct;
    };

};

*/



// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
// var cell3 = {};
// cell3.classList.add('politicalParty');
// var cell4 = {};
// cell4.classList.add('stateOfOrigin');




unction generateSenateTable (data) {
    var table = document.getElementById("senate-data");
    table.innerHTML = "";

    for (var i = 0; i < data.results[0].members.length; i++) {
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = data.results[0].members[i].last_name;
        
        // var firstName = firstName.insertCell(i);
        // var senatorFirstName = document.createElement(data.results[i].first_name);
        var cell1 = row.insertCell(1);
        cell1.innerHTML = data.results[0].members[i].first_name;
        



        // var middleName = middleName.insertCell(i);
        // var senatorMiddleName = document.createElement(data.results[i].middle_name);
        var cell2 = row.insertCell(2);
        cell2.innerHTML = data.results[0].members[i].middle_name;
        



        // var partyAffiliation = partyAffiliation.insertCell(i);
        // var senatorPartyAffiliation = document.createElement(data.results[i].party);
        var cell3 = row.insertCell(3);
        cell3.innerHTML = data.results[0].members[i].party;
        // partyAffiliation.classList.add('politicalParty');        
        // Class for party affiliation




        // var stateOfOrigin = stateOfOrigin.insertCell(i);
        // var senatorStateOfOrigin = document.createElement(data.results[i].state);
        var cell4 = row.insertCell(4);
        cell4.innerHTML = data.results[0].members[i].state;    
        // stateAffiliation.classList.add('stateOfOrigin');
        // Class for state filter




        // var seniority = seniority.insertCell(i);
        // var senatorSeniority = document.createElement(data.results[i].seniority);
        var cell5 = row.insertCell(5);
        cell5.innerHTML = data.results[0].members[i].seniority;
        



        // var consistencyWithParty = consistencyWithParty.insertCell(i);
        // var senatorConsistencyWithParty = document.createElement(data.results[i].votes_with_party_pct);
        var cell6 = row.insertCell(6);
        cell6.innerHTML = data.results[0].members[i].votes_with_party_pct;
    };

};


// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
// var cell3 = {};
// cell3.classList.add('politicalParty');
// var cell4 = {};
// cell4.classList.add('stateOfOrigin');



