import { Button } from "react-bootstrap";

export default function ContactPage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Clear the form
    e.target.reset();
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      // Displays tooltip with error message
      e.target.setCustomValidity("This field is required");
    } else {
      // Clears the custom validity message
      e.target.setCustomValidity("");
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      email.target.setCustomValidity("Invalid email address");
    } else {
      email.target.setCustomValidity("");
    }
  };

  return (
    <div className="text-center">
      <h1>Contact Me</h1>
      <div className="d-flex justify-content-center">
        <form className="d-flex flex-column col-5" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            onBlur={handleBlur}
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            onBlur={handleBlur || isEmailValid}
            name="email"
          />
          <textarea placeholder="Message" onBlur={handleBlur} name="message" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
