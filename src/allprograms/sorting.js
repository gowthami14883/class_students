
const students = [
  { id: 1, name: "Aarav", address: "Street 1", place: "Hyderabad", marks: 78 },
  { id: 2, name: "Bhavya", address: "Street 2", place: "Bangalore", marks: 85 },
  { id: 3, name: "Charan", address: "Street 3", place: "Chennai", marks: 67 },
  { id: 4, name: "Divya", address: "Street 4", place: "Pune", marks: 92 },
  { id: 5, name: "Esha", address: "Street 5", place: "Mumbai", marks: 74 },
  { id: 6, name: "Farhan", address: "Street 6", place: "Delhi", marks: 88 },
  { id: 7, name: "Gowri", address: "Street 7", place: "Hyderabad", marks: 69 },
  { id: 8, name: "Harsha", address: "Street 8", place: "Vizag", marks: 81 },
  { id: 9, name: "Ishaan", address: "Street 9", place: "Bangalore", marks: 90 },
  { id: 10, name: "Jaya", address: "Street 10", place: "Chennai", marks: 72 }
];

const sortStudents = (sortBy) => {
  if (sortBy === "id") {
    return students.slice().sort((a, b) => a.id - b.id);
  }

  if (sortBy === "name") {
    return students.slice().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "place") {
    return students.slice().sort((a, b) =>
      a.place.localeCompare(b.place)
    );
  }

  if (sortBy === "marks") {
    return students.slice().sort((a, b) => b.marks - a.marks);
  }

  return null;
};

module.exports = { sortStudents};
