const headers = { "Content-type": "application/json" };

function fetchGetAllCustomers() {
  const endpoint = "http://localhost:3001/customers";
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
}

export { fetchGetAllCustomers };
