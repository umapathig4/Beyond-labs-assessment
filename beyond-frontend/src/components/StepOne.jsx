import useForm from "../Hooks/useForm";

function StepOne() {
  const {
    handleStep,
    handleStepBack,
    handleSubmit,
    handleChange,
    step1,
    step2,
    formData,
    error,
  } = useForm();

  if(!error) 
  return (
    <div>
      <div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
          {/* {error.firstNameError && <p>{error.firstNameError}</p>} */}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          {/* {error.emailError && <p>{error.emailError}</p>} */}
        </div>

        <button onClick={handleStep}>Next</button>
      </div>
    </div>
  );
}

export default StepOne;
