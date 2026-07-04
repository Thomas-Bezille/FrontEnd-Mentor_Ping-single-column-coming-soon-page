import { useState } from "react";

// Simple but robust email pattern (matches the challenge's validation intent)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const value = email.trim();

    if (value === "") {
      setError("Please provide a valid email address");
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setError("Please provide a valid email address");
      return;
    }

    setError("");
    // Submission would be sent to the API here.
  }

  const hasError = error !== "";

  return (
    <form className="subscribe" onSubmit={handleSubmit} noValidate>
      <div className="subscribe__field">
        <input
          type="email"
          className={`subscribe__input${hasError ? " subscribe__input--error" : ""}`}
          placeholder="Your email address..."
          aria-label="Email address"
          aria-invalid={hasError}
          aria-describedby={hasError ? "email-error" : undefined}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (hasError) setError("");
          }}
        />
        {hasError && (
          <p id="email-error" className="subscribe__error" role="alert">
            {error}
          </p>
        )}
      </div>

      <button type="submit" className="subscribe__button">
        Notify Me
      </button>
    </form>
  );
}

export default SubscribeForm;
