const getUserProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject("User ID is required");
      } else {
        resolve({
          id: userId,
          name: "Gowthami",
          email: "teddy@gmail.com",
          address: {
            street: "kimtee Road",
            city: "hyd",
            pincode: 500017
          },
          skills: ["JavaScript", "Node.js", "Express"],
          education: {
            degree: "B.Tech",
            year: 2025,
            college: {
              name: "VBIT Engineering College",
              location: "Gatkesar"
            }
          }
        });
      }
    }, 1000);
  });
};

module.exports = getUserProfile;
