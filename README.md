## Job Application Form
# Objective
# Build a comprehensive job application form with nested conditional fields, multiple field types, and enhanced validation using React.

# Form Fields
Full Name: Text input <br>
Email: Email input <br>
Phone Number: Number input <br>
Applying for Position: Dropdown (Developer, Designer, Manager) <br>
Relevant Experience: Number input (visible if "Developer" or "Designer" is selected) <br>
Portfolio URL: Text input (visible if "Designer" is selected) <br>
Management Experience: Text input (visible if "Manager" is selected) <br>
Additional Skills: Multiple checkboxes (JavaScript, CSS, Python, etc.) <br>
Preferred Interview Time: Date and Time Picker <br>

# Conditional Logic <br>
Show Relevant Experience if "Developer" or "Designer" is selected. <br>
Show Portfolio URL if "Designer" is selected. <br>
Show Management Experience if "Manager" is selected.<br>
# Validation<br>
Full Name: Required<br>
Email: Required and must be a valid email format<br>
Phone Number: Required and must be a valid number<br>
Relevant Experience: Required if "Developer" or "Designer" is selected, must be a number greater than 0<br>
Portfolio URL: Required if "Designer" is selected, must be a valid URL<br>
Management Experience: Required if "Manager" is selected<br>
Additional Skills: At least one skill must be selected<br>
Preferred Interview Time: Required and must be a valid date and time<br>
# Submission<br>
On form submission, display a summary of the entered data.<br>
# Requirements<br>
Use React functional components and hooks (useState, useEffect).<br>
Implement custom hooks for form validation and management.<br>
Ensure a clean and user-friendly interface with clear error messages.<br>
