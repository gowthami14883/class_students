async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = await response.json();

  console.log("Name:", user.name);
  console.log("Email:", user.email);
}

fetchUser(1);
