//FETCH Function - UserSubmittedWritingResourcesList.js
export const GetUserSubmittedWritingResources = () => {
    return fetch("http://localhost:8088/writingResources?_expand=user").then(
      (response) => response.json()
    );
  };
  
//POST Function - CharacterForm.js
export const GetNewWritingResourceAndSend = (resourceToSendToAPI) => {
  return fetch(`http://localhost:8088/writingResources`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resourceToSendToAPI),
  }).then((response) => response.json());
};

//FETCH Function - EditCharacterForm.js
export const GetIndividualResource = (resourceId) => {
  return fetch(`http://localhost:8088/writingResources/${resourceId}`).then(
    (response) => response.json()
  );
};

//PUT Function - EditCharacterForm.js
export const GetResourceAndReplace = (writingResource) => {
  return fetch(`http://localhost:8088/writingResources/${writingResource.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(writingResource),
  }).then((response) => response.json());
};

//DELETE Function - IndividualCharacterProfile.js
export const DeleteResource = (resourceId) => {
  return fetch(`http://localhost:8088/writingResources/${resourceId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};