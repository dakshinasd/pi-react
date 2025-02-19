async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), time);
  });
}

async function login(username: string, password: string) {
  await wait(500);
  if (username === "demo" && password === "demo") {
    return {
      email: "demo@demo.com",
      userId: "1",
    };
  } else {
    return false;
  }
}

async function getUserProfile(authToken: string) {
  // TODO: Send proper authToken and verify it on BE
  if (authToken === "abc") {
    return {
      email: "demo@demo.com",
      userId: "1",
    };
  } else {
    return false;
  }
}

export default { login };
