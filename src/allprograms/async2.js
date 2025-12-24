const getUser = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    id:563456,
    name: "Gowthami",
    skills: ["JS", "Node"]
  };
};

module.exports = getUser;
