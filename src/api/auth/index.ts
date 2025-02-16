async function login(username: string, password: string) {
  if (username === "demo" && password === "demo") {
    return {
      email: "demo@demo.com",
      userId: "1",
    };
  } else {
    return false;
  }
}

export default { login };
