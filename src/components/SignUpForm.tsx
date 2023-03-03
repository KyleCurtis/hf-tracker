import { useState, useEffect } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = { email, firstName, lastName, username, password };
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
      } else {
        resetForm;
        console.log("form submitted successfully!");
      }
    } catch (error) {
      console.log("There was an error submitting!", error);
    }
  };

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
  };

  /*useEffect(() => {
    console.log("email:", email);
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("username:", username);
    console.log("password:", password);
  }) */

  return (
    <>
      <div className="sign-up-form max-w-5xl p-16 m-auto">
        <div className="text-black dark:text-white px-6 py-8 shadow-md w-[100%] border-[var(--dark-border)] border-2 border-solid rounded-2xl">
          <h1 className="mb-8 text-3xl text-center font-bold">Sign up</h1>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="firstName"
            placeholder="First Name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="lastName"
            placeholder="Last Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="email"
            placeholder="Email"
          />

        <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="username"
            placeholder="Username"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#dddddd] dark:bg-[var(--dark-bg-contrast)] text-black dark:text-white"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
          onClick={handleSubmit}
            type="submit"
            className="text-black w-full text-center font-bold py-3 rounded bg-green-400 hover:bg-[darkgreen] focus:outline-none my-1 border-solid border-2 border-[var(--dark-border)]"
          >
            Create Account
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <a className="no-underline border-b border-blue text-blue" href="#">
            Log in
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
