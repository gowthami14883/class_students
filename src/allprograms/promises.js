const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully");
    }, 1500);
  });
};

module.exports = loadData;