interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// const studentA: Student = {
//     firstName: "Rachael",
//     lastName: "Hassan",
//     age: 19,
//     location: "Paris",
// };

// const studentB: Student = {
//     firstName: "David",
//     lastName: "Obodo",
//     age: 22,
//     location: "New York",
// };

// const studentsList: Student[] = [studentA, studentB];
const studentsList: Student[] = [
  {
    firstName: 'Rachael',
    lastName: 'Hassan',
    age: 19,
    location: 'Paris',
  },
  {
    firstName: 'David',
    lastName: 'Obodo',
    age: 22,
    location: 'New York',
  },
];

function createTable() {
  const tbody = document.querySelector('tbody');
  const tableData = studentsList
    .map((item) => `
    <tr>
    <td>${item.firstName}</td>
    <td>${item.location}</td>
    </tr>
    `)
    .join('');
  tbody.innerHTML = tableData;
}
