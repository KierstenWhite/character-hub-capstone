//POST Function - CharacterForm.js
export const GetNewCharacterFormAndSend = (profileToSendToAPI) => {
    return fetch(`http://localhost:8088/characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileToSendToAPI),
    }).then((res) => res.json());
  };

//FETCH Function - Character.js
export const GetCharacterInformation = () => {
    return fetch('http://localhost:8088/characters?_expand=user')
        .then((response) => response.json())
        .then();
};