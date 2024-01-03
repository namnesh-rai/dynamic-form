// Load the JSON file asynchronously
fetch('formData.json')
  .then(response => response.json())
  .then(formData => {
    const formContainer = document.getElementById('form-container');

    formData.forEach(field => {
      // Create a wrapper div for each input field
      const fieldWrapper = document.createElement('div');
      fieldWrapper.classList.add('form-group'); // Add Bootstrap form-group class

      const inputElement = document.createElement('input');
      inputElement.type = field.type;
      inputElement.placeholder = field.label;
      inputElement.name = field.name;

      // Customize further properties or add event listeners here
      // For example, you can add a class based on the input type
      inputElement.classList.add(`form-control-${field.type}`); // Add Bootstrap form-control class

      // Append the input element to the field wrapper
      fieldWrapper.appendChild(inputElement);

      // Append the field wrapper to the form container
      formContainer.appendChild(fieldWrapper);
    });
  })
  .catch(error => console.error('Error loading JSON file:', error));
