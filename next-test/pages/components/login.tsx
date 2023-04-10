function Login() {

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default Login;