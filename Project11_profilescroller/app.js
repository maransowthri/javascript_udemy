const data = [
  {
    name: "Karan",
    age: 27,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Kalees",
    age: 25,
    gender: "male",
    lookingFor: "female",
    location: "Paris FR",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Maran",
    age: 24,
    gender: "male",
    lookingFor: "female",
    location: "Chennai TN",
    image: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Mahesh",
    age: 22,
    gender: "male",
    lookingFor: "female",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

function profileGen(profiles) {
  let index = 0;

  return {
    next: function () {
      if (index >= profiles.length) {
        index = index % profiles.length;
      }
      let curData = { name: profiles[index], done: false };
      index++;
      return curData;
    },
  };
}

const genProfileObj = profileGen(data);
displayData();

document.getElementById("next").addEventListener("click", displayData);

function displayData() {
  const profile = genProfileObj.next().name;
  document.getElementById("profileDisplay").innerHTML = `
            <ul class='list-group'>
                <li class='list-group-item'>Name: ${profile.name}</li>
                <li class='list-group-item'>Age: ${profile.age}</li>
                <li class='list-group-item'>Gender: ${profile.gender}</li>
                <li class='list-group-item'>Looking For: ${profile.lookingFor}</li>
            </ul>
        `;
  document.getElementById("imageDisplay").innerHTML = `
            <img src='${profile.image}' />
        `;
}
