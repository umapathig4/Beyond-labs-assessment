function useForm() {
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
  };

  const handleStep = () => {
    setStep2(true);
    setStep1(false);
  };
  const handleStepBack = () => {
    setStep2(false);
    setStep1(true);
  };

  return {
    handleStep,
    handleStepBack,
    handleSubmit,
    handleChange,
    step1,
    step2,
    formData,
    error,
  };
}

export default useForm;
