import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    role: "",
    consent: false,
  });

  const [error, setError] = useState({
    firstNameError: "",
    emailError: "",
    roleError: "",
    consentError: "",
  });

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError((prev) => ({
      ...prev,
      [`${name}Error`]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim())
      newErrors.firstNameError = "Firstname is required";
    if (!formData.email.trim()) newErrors.emailError = "Email is required";
    else if (!emailRegexp.test(formData.email))
      newErrors.emailError = "Invalid email";

    if (!formData.role) newErrors.roleError = "Role is required";
    if (!formData.consent) newErrors.consentError = "Agree terms & conditions";

    setError((prev) => ({
      ...prev,
      ...newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = validate();

    if (!ok) return;

    console.log("submitted", formData);

    setFormData({
      firstName: "",
      email: "",
      role: "",
      consent: false,
    });

    setError({
      firstNameError: "",
      emailError: "",
      roleError: "",
      consentError: "",
    });
  };

  const handleStep = () => {
    setStep2(true);
    setStep1(false);
  };
  const handleStepBack = () => {
    setStep2(false);
    setStep1(true);
  };

  return (
    <>
      <div>
        <h1>Beyond Labs Assessment</h1>

        <form onSubmit={handleSubmit}>
          {step1 && (
            <div>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                ></input>
                {error.firstNameError && <p>{error.firstNameError}</p>}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
                {error.emailError && <p>{error.emailError}</p>}
              </div>

              <button onClick={handleStep}>Next</button>
            </div>
          )}

          {step2 && (
            <div>
              <div>
                <label>Role: </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
                {error.roleError && <p>{error.roleError}</p>}
              </div>

              <div>
                <label htmlFor="terms">Accept Terms & Conditions</label>
                <input
                  type="checkbox"
                  name="consent"
                  onChange={handleChange}
                  checked={formData.consent}
                ></input>
                {error.consentError && <p>{error.consentError}</p>}
              </div>

              <div>
                <button onClick={handleStepBack}>back</button>
                <button type="submit">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
