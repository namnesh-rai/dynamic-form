
fetch('formData.json')
  .then(response => response.json())
  .then(formData => {
    const formContainer = document.getElementById('form-container');

    formData.forEach(field => {
        if (field.type === "text" || field.type === "password" || field.type === "email") {
          const inputElement = document.createElement('input');
          inputElement.type = field.type;
          inputElement.placeholder = field.label;
          inputElement.name = field.name;
          formContainer.appendChild(inputElement);
        } else if (field.type === "checkbox") {
          const checkboxElement = document.createElement('input');
          checkboxElement.type = "checkbox";
          checkboxElement.label = field.label;
          checkboxElement.name = field.name;
          formContainer.appendChild(checkboxElement);
        } else if (field.type === "textarea") {
          const textareaElement = document.createElement('textarea');
          textareaElement.placeholder = field.label;
          textareaElement.name = field.name;
          formContainer.appendChild(textareaElement);
        } else if (field.type === "range") {
          const rangeElement = document.createElement('input');
          rangeElement.type = "range";
          rangeElement.label = field.label;
          rangeElement.name = field.name;
          rangeElement.min = field.min;
          rangeElement.max = field.max;
          rangeElement.value = field.value;
          formContainer.appendChild(rangeElement);
        }

        
        if (field.formtext && Array.isArray(field.formtext)) {
          field.formtext.forEach(textField => {
              if(textField.enabled === true)
              {
                const textInputElement = document.createElement('input');
                textInputElement.type = "text";
                textInputElement.placeholder = textField.label;
                textInputElement.name = textField.name;
                formContainer.appendChild(textInputElement);
              }
            
          });
        }

        if (field.formpara && Array.isArray(field.formpara)) {
          field.formpara.forEach(paraField => {
              if(paraField.enabled === true)
              {
                const textareaElement = document.createElement('textarea');
                textareaElement.placeholder = paraField.label;
                textareaElement.name = paraField.name;
                formContainer.appendChild(textareaElement);
              }

          });
        }

        if (field.formrange && Array.isArray(field.formrange)) {
          field.formrange.forEach(rangeField => {
            
              if(rangeField.enabled === false)
              {
                const rangeInputElement = document.createElement('input');
                rangeInputElement.type = "range";
                rangeInputElement.label = rangeField.label;
                rangeInputElement.name = rangeField.name;
                rangeInputElement.min = rangeField.min;
                rangeInputElement.max = rangeField.max;
                rangeInputElement.value = rangeField.value;
                formContainer.appendChild(rangeInputElement);
              }
            
          });
        }
    });
  })
  .catch(error => console.error('Error loading JSON file:', error));

