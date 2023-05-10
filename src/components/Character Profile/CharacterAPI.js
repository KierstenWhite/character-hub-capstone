//POST Function - CharacterForm.js
export const GetNewCharacterFormAndSend = (profileToSendToAPI) => {
  return fetch(`http://localhost:8088/characters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileToSendToAPI),
  }).then((response) => response.json());
};

//FETCH Function - Character.js
export const GetCharacterInformation = () => {
  return fetch("http://localhost:8088/characters?_expand=user").then(
    (response) => response.json()
  );
};

//FETCH Function - IndividualCharacterProfile.js
export const GetCharacterById = (characterId) => {
  return fetch(`http://localhost:8088/characters/${characterId}`).then(
    (response) => response.json()
  );
};

//FETCH Function - EditCharacterForm.js
export const GetIndividualCharacterProfile = (characterId) => {
  return fetch(`http://localhost:8088/characters/${characterId}`).then(
    (response) => response.json()
  );
};

//PUT Function - EditCharacterForm.js
export const GetProfileAndReplace = (character) => {
  return fetch(`http://localhost:8088/characters/${character.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
  }).then((response) => response.json());
};

//DELETE Function - IndividualCharacterProfile.js
export const DeleteProfile = (characterId) => {
  return fetch(`http://localhost:8088/characters/${characterId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
