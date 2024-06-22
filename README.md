## Job Application Form
# Objective
# Build a comprehensive job application form with nested conditional fields, multiple field types, and enhanced validation using React.

# Form Fields
Full Name: Text input
Email: Email input
Phone Number: Number input
Applying for Position: Dropdown (Developer, Designer, Manager)
Relevant Experience: Number input (visible if "Developer" or "Designer" is selected)
Portfolio URL: Text input (visible if "Designer" is selected)
Management Experience: Text input (visible if "Manager" is selected)
Additional Skills: Multiple checkboxes (JavaScript, CSS, Python, etc.)
Preferred Interview Time: Date and Time Picker

# Conditional Logic
Show Relevant Experience if "Developer" or "Designer" is selected.
Show Portfolio URL if "Designer" is selected.
Show Management Experience if "Manager" is selected.
# Validation
Full Name: Required
Email: Required and must be a valid email format
Phone Number: Required and must be a valid number
Relevant Experience: Required if "Developer" or "Designer" is selected, must be a number greater than 0
Portfolio URL: Required if "Designer" is selected, must be a valid URL
Management Experience: Required if "Manager" is selected
Additional Skills: At least one skill must be selected
Preferred Interview Time: Required and must be a valid date and time
# Submission
On form submission, display a summary of the entered data.
# Requirements
Use React functional components and hooks (useState, useEffect).
Implement custom hooks for form validation and management.
Ensure a clean and user-friendly interface with clear error messages.
