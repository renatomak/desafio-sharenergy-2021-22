const headers = { "Content-type": "application/json" };

function fetchGetAllCustomers() {
  const endpoint = "http://localhost:3001/customers";
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
}

const fetchCreateCustomer = (customer) => {
  const endpoint = "http://localhost:3001/customers";
  return fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export { fetchGetAllCustomers, fetchCreateCustomer };
