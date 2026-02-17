import useForm from "../Hooks/useForm";

function StepTwo() {

    const { handleStep,
    handleStepBack,
    handleSubmit,
    handleChange,
    step1,
    step2,
    formData,
    error,} = useForm();
    return (
        <div>

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

        </div>
    )
}

export default StepTwo;