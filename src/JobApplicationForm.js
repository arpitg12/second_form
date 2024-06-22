import React, { useState, useEffect } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        additionalSkills: checked
          ? [...formData.additionalSkills, value]
          : formData.additionalSkills.filter((skill) => skill !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number is invalid';
    }
    if (
      (formData.position === 'Developer' || formData.position === 'Designer') &&
      (!formData.relevantExperience || formData.relevantExperience <= 0)
    ) {
      newErrors.relevantExperience = 'Relevant Experience is required and must be greater than 0';
    }
    if (
      formData.position === 'Designer' &&
      (!formData.portfolioURL || !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.portfolioURL))
    ) {
      newErrors.portfolioURL = 'Portfolio URL is required and must be valid';
    }
    if (formData.position === 'Manager' && !formData.managementExperience) {
      newErrors.managementExperience = 'Management Experience is required';
    }
    if (formData.additionalSkills.length === 0) {
      newErrors.additionalSkills = 'At least one skill must be selected';
    }
    if (!formData.preferredInterviewTime) {
      newErrors.preferredInterviewTime = 'Preferred Interview Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label>Applying for Position:</label>
          <select name="position" value={formData.position} onChange={handleChange}>
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {(formData.position === 'Developer' || formData.position === 'Designer') && (
          <div className="form-group">
            <label>Relevant Experience (Years):</label>
            <input
              type="number"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
            />
            {errors.relevantExperience && <span className="error">{errors.relevantExperience}</span>}
          </div>
        )}

        {formData.position === 'Designer' && (
          <div className="form-group">
            <label>Portfolio URL:</label>
            <input
              type="text"
              name="portfolioURL"
              value={formData.portfolioURL}
              onChange={handleChange}
            />
            {errors.portfolioURL && <span className="error">{errors.portfolioURL}</span>}
          </div>
        )}

        {formData.position === 'Manager' && (
          <div className="form-group">
            <label>Management Experience:</label>
            <textarea
              name="managementExperience"
              value={formData.managementExperience}
              onChange={handleChange}
            />
            {errors.managementExperience && <span className="error">{errors.managementExperience}</span>}
          </div>
        )}

        <div className="form-group">
          <label>Additional Skills:</label>
          <div className="checkbox-group">
            {['JavaScript', 'CSS', 'Python', 'HTML', 'React', 'Node.js', 'SQL', 'NoSQL', 'Others'].map((skill) => (
              <label key={skill} className="checkbox-label">
                <input
                  type="checkbox"
                  name="additionalSkills"
                  value={skill}
                  checked={formData.additionalSkills.includes(skill)}
                  onChange={handleChange}
                /> {skill}
              </label>
            ))}
          </div>
          {errors.additionalSkills && <span className="error">{errors.additionalSkills}</span>}
        </div>

        <div className="form-group">
          <label>Preferred Interview Time:</label>
          <input
            type="datetime-local"
            name="preferredInterviewTime"
            value={formData.preferredInterviewTime}
            onChange={handleChange}
          />
          {errors.preferredInterviewTime && <span className="error">{errors.preferredInterviewTime}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="form-summary">
          <h3>Form Submitted Successfully</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
