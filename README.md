# Job Application Form

## Objective
This project implements an advanced job application form using React, featuring nested conditional fields, multiple field types, and robust validation.

## Features
- **Dynamic Fields**: Conditionally display fields based on selected job position.
- **Validation**: Ensures all required fields are filled out correctly before submission.
- **Summary Display**: Shows a summary of the entered data upon form submission.

## Form Fields
- **Full Name**: Required text input for applicant's full name.
- **Email**: Required email input for applicant's email address.
- **Phone Number**: Required number input for applicant's phone number.
- **Applying for Position**: Dropdown selection for Developer, Designer, or Manager.
- **Relevant Experience**: Required number input, visible if applying for Developer or Designer.
- **Portfolio URL**: Required text input, visible if applying for Designer.
- **Management Experience**: Required text input, visible if applying for Manager.
- **Additional Skills**: Multiple checkboxes for selecting relevant skills (JavaScript, CSS, Python, etc.).
- **Preferred Interview Time**: Required date and time picker for scheduling interviews.

## Technologies Used
- React
- Custom Hooks (`useForm`, `useFormValidation`)
- HTML/CSS for styling

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the form.



## Custom Hooks
- **useForm**: Manages form state including field values and visibility based on conditional logic.
- **useFormValidation**: Handles form validation logic based on defined rules.

## Additional Notes
- Ensure all dependencies are installed (`react`, `react-dom`, etc.) before running the application.
- The form UI is designed to provide a seamless user experience with clear feedback on errors.

Feel free to customize and expand upon this project as needed. Happy coding!
