export const fetchEmployeesByPerPage = (perPage = 100) => {
    fetch(`https://dt-interviews.appspot.com/?per_page=${perPage}`)
        .then(response => {
            return response.json();
        }).then(jsonReponse => {
            this.setState({ employees: jsonReponse })
        });
}

export const fetchEmployeesByPage = (page = 1) => {
  fetch(`https://dt-interviews.appspot.com/?page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(jsonReponse => {
      this.setState({ employees: jsonReponse });
    });
};

export const fetchEmployee = (id) => {
    fetch(`https://dt-interviews.appspot.com/${id}`)
        .then(response => {
            return response.json();
        })
        .then(jsonReponse => {
            this.setState({ employees: jsonReponse });
        });
};


export const createNewEmployee = (data) => {
    fetch('https://dt-interviews.appspot.com/', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}