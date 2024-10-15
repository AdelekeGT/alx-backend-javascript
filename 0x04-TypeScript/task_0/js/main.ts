interface Student {
	firstname: string;
	lastname: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstname: 'Tomiloba',
	lastname: 'Oyewole',
	age: 26,
	location: 'Ibadan'
}

const student2: Student = {
	firstname: 'Tobiloba',
	lastname: 'Oyewole',
	age: 26,
	location: 'Ife'
}

const studentsList: Array<Student> = [student1, student2];

function displayStudents(students: Array<Student>) {
	const table = document.createElement('table');
	const thead = document.createElement('thead');
	const tbody = document.createElement('tbody');
	const tr = document.createElement('tr');
	const th1 = document.createElement('th');
	const th2 = document.createElement('th');
	const th3 = document.createElement('th');
	const th4 = document.createElement('th');
	const th1Text = document.createTextNode('Firstname');
	const th2Text = document.createTextNode('Lastname');
	const th3Text = document.createTextNode('Age');
	const th4Text = document.createTextNode('Location');
	th1.appendChild(th1Text);
	th2.appendChild(th2Text);
	th3.appendChild(th3Text);
	th4.appendChild(th4Text);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	thead.appendChild(tr);
	table.appendChild(thead);
	students.forEach(student => {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td1Text = document.createTextNode(student.firstname);
		const td2Text = document.createTextNode(student.lastname);
		const td3Text = document.createTextNode(student.age.toString());
		const td4Text = document.createTextNode(student.location);
		td1.appendChild(td1Text);
		td2.appendChild(td2Text);
		td3.appendChild(td3Text);
		td4.appendChild(td4Text);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tbody.appendChild(tr);
	});
}
