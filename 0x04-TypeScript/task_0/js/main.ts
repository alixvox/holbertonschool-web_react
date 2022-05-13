interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const st1: Student = {
  firstName: 'Guinivere',
  lastName: 'Beck',
  age: 22,
  location: 'New York University'
}

const st2: Student = {
  firstName: 'Mark',
  lastName: 'Zuckerberg',
  age: 19,
  location: 'Harvard Business School'
}

const stList: Array<Student> = [st1, st2];

const table = document.createElement('table');

for (const st of stList) {
  const row = table.insertRow();
  row.insertCell().innerHTML = st.firstName;
  row.insertCell().innerHTML = st.location;
}

document.appendChild(table);
