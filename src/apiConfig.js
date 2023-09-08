export const URL = "http://localhost:5000/";
export const token =
  "HUncbscb232bcehwjwencejw3ndnnsjdjedenbsedkecwncw4nf4ncwncbbcwjwknwcnbcwbcreh";

export const apiHeader = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      //  'Authorization': 'Bearer ' + localStorage.getItem('token')
      Authorization: "Bearer " + token,
    },
  };
};
