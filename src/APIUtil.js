export const fetchEmployeesByPerPage = (perPage = 100) => {
    return fetch(`https://dt-interviews.appspot.com/?per_page=${perPage}`)
        .then(response => {
            return response.json();
        });
}

export const fetchEmployeesByPage = (page = 1) => {
  return fetch(`https://dt-interviews.appspot.com/?page=${page}`)
    .then(response => {
      return response.json();
    });
};

export const fetchEmployee = (id) => {
    return fetch(`https://dt-interviews.appspot.com/${id}`)
        .then(response => {
            return response.json();
        });
};


export const createNewEmployee = (data) => {
   return fetch('https://dt-interviews.appspot.com/', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}