function Login() {
  return (
    <div>
      <p>Put app description here</p>
      <form
        action=""
        className="flex flex-col border border-black rounded-md p-4 gap-2"
      >
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          className="border border-slate-400 rounded-md"
        />
        <input type="submit" className="border bg-amber-600 rounded-md" />
      </form>
    </div>
  );
}

export default Login;
