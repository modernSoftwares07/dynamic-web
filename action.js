function buttonAction(){
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        //alert(`name: ${name} & contact ${contact}`)
        if (name && contact) {
            const tableElement = document.getElementById('contactTable');
            const rowElement = document.createElement('tr');
            const nameElement = document.createElement('td');
            const contactElement = document.createElement('td');
            const tableBodyElelemnt = document.createElement('tbody');
            nameElement.innerHTML = name;
            contactElement.innerHTML = contact;
            rowElement.appendChild(nameElement);
            rowElement.appendChild(contactElement);
            tableBodyElelemnt.appendChild(rowElement);
            tableElement.appendChild(tableBodyElelemnt);
        }
}