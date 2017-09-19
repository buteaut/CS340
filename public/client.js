
function classDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Skill Points'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Hit Dice'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Book ID'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'id') {
                    tr.setAttribute('id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                } else {
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('id', tr.id);
            delButton.setAttribute('onclick', 'deleteClass(this.id)');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);

            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('id', tr.id);
            editButton.setAttribute('onclick', 'editClass(this.id)');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);

            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function bookDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Book ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Book Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Total Page Number'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'id') {
                    tr.setAttribute('id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                } else {
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('id', tr.id);
            delButton.setAttribute('onclick', 'deleteBook(this.id)');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);

            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('id', tr.id);
            editButton.setAttribute('onclick', 'editBook(this.id)');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);

            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function spellDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Spell ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Spell Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Spell Type'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Book ID'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'id') {
                    tr.setAttribute('id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                } else {
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('id', tr.id);
            delButton.setAttribute('onclick', 'deleteSpell(this.id)');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);

            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('id', tr.id);
            editButton.setAttribute('onclick', 'editSpell(this.id)');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);

            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function weaponDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Weapon ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Weapon Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Damage'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Weapon Type'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Book ID'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'id') {
                    tr.setAttribute('id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                } else {
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('id', tr.id);
            delButton.setAttribute('onclick', 'deleteWeapon(this.id)');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);

            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('id', tr.id);
            editButton.setAttribute('onclick', 'editWeapon(this.id)');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);

            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function ClassSpellDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Spell ID'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'Pf_Class_ID') {
                    tr.setAttribute('class_id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);

                }
                if (j === 'Pf_Spell_ID') {
                    tr.setAttribute('spell_id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('class_id', tr.getAttribute('class_id'));
            delButton.setAttribute('spell_id', tr.getAttribute('spell_id'));
            delButton.setAttribute('onclick', 'deleteClass_Spell(this.getAttribute("class_id"), this.getAttribute("spell_id"))');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);
/*
            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('Pf_Class_ID', tr.Pf_Class_ID);
            editButton.setAttribute('Pf_Spell_ID', tr.Pf_Spell_ID);
            editButton.setAttribute('onclick', 'editClass_Spell(this.Pf_Class_ID, this.Pf_Spell_ID)');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);
*/
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function ClassWeaponDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class ID'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Weapon ID'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                if (j === 'Pf_Class_ID') {
                    tr.setAttribute('class_id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);

                }
                if (j === 'Pf_Weapon_ID') {
                    tr.setAttribute('weapon_id', data[i][j]);
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(data[i][j]));
                    tr.appendChild(cell);
                }
            }
            var delButton = document.createElement('button');
            delButton.className = 'deleteButton';
            delButton.setAttribute('class_id', tr.getAttribute('class_id'));
            delButton.setAttribute('weapon_id', tr.getAttribute('weapon_id'));
            delButton.setAttribute('onclick', 'deleteClass_Weapon(this.getAttribute("class_id"), this.getAttribute("weapon_id"))');
            delButton.appendChild(document.createTextNode('delete'));
            tr.appendChild(delButton);
/*
            var editButton = document.createElement('button');
            editButton.className = 'editButton';
            editButton.setAttribute('Pf_Class_ID', tr.getAttribute('class_id'));
            editButton.setAttribute('Pf_Weapon_ID', tr.getAttribute('weapon_id'));
            editButton.setAttribute('onclick', 'editClass_Weapon(this.getAttribute("class_id"), this.getAttribute("weapon_id"))');
            editButton.appendChild(document.createTextNode('edit'));
            tr.appendChild(editButton);
*/
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function ClassUsableWeaponsDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Weapon Name'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(data[i][j]));
                tr.appendChild(cell);
            }
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

function ClassUsableSpellsDraw(DBdata){
    var data = JSON.parse(DBdata);
    if (data.length > 0) {
        var refresh =document.getElementsByClassName('jsTable')[0];
        if(refresh.hasChildNodes()){
            console.log("children found");
            refresh.removeChild(refresh.childNodes[0]);
        }

        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Class Name'));
        tr.appendChild(th);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode('Spell Name'));
        tr.appendChild(th);

        tableBody.appendChild(tr);
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j in data[i]) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(data[i][j]));
                tr.appendChild(cell);
            }
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        document.getElementsByClassName('jsTable')[0].appendChild(table);
    }
}

document.addEventListener('DOMContentLoaded', bindButtons);
document.addEventListener('DOMContentLoaded', getData);

function getData(){
    //event.preventDefault();
    var req = new XMLHttpRequest();

    req.open('GET', "/table", true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("getData test");
            classDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    //req.setRequestHeader('Content-Type', 'application/json');
    req.send(null);
};

function deleteClass(id){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();

    req.open('GET', "/deleteClass?id=" + id, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            classDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function deleteBook(id){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();

    req.open('GET', "/deleteBook?id=" + id, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            bookDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function deleteSpell(id){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();

    req.open('GET', "/deleteSpell?id=" + id, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            spellDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function deleteWeapon(id){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();

    req.open('GET', "/deleteWeapon?id=" + id, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            weaponDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function deleteClass_Spell(Pf_Class_ID, Pf_Spell_ID){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Pf_Class_ID=" + Pf_Class_ID + "&";
    payload += "Pf_Spell_ID=" + Pf_Spell_ID;
    req.open('GET', "/deleteClass_Spell?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            ClassSpellDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function deleteClass_Weapon(Class_ID, Weapon_ID){
    //event.preventDefault();
    console.log("deleteItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Pf_Class_ID=" + Class_ID + "&";
    payload += "Pf_Weapon_ID=" + Weapon_ID;
    req.open('GET', "/deleteClass_Weapon?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            ClassWeaponDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function editClass(id){
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Class_Name=" + document.getElementById('Column2').value + "&";
    payload += "Skill_Points=" + document.getElementById('Column3').value + "&";
    payload += "Hit_Dice=" + document.getElementById('Column4').value + "&";
    payload += "Pf_Book_ID=" + document.getElementById('Column5').value + "&";
    payload += "id=" + id;
    req.open('GET', "/editClass?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("async test");
            classDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    console.log(payload);
    req.send(null);
}

function editBook(id){
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Book_Name=" + document.getElementById('Column2').value + "&";
    payload += "Total_Page_Number=" + document.getElementById('Column3').value + "&";
    payload += "id=" + id;
    req.open('GET', "/editBook?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("async test");
            bookDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    console.log(payload);
    req.send(null);
}

function editSpell(id){
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Spell_Name=" + document.getElementById('Column2').value + "&";
    payload += "Spell_Type=" + document.getElementById('Column3').value + "&";
    payload += "Pf_Book_ID=" + document.getElementById('Column4').value + "&";
    payload += "id=" + id;
    req.open('GET', "/editSpell?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("async test");
            spellDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    console.log(payload);
    req.send(null);
}

function editWeapon(id){
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Weapon_Name=" + document.getElementById('Column2').value + "&";
    payload += "Damage=" + document.getElementById('Column3').value + "&";
    payload += "Weapon_Type=" + document.getElementById('Column4').value + "&";
    payload += "Pf_Book_ID=" + document.getElementById('Column5').value + "&";
    payload += "id=" + id;
    req.open('GET', "/editWeapon?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("async test");
            weaponDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    console.log(payload);
    req.send(null);
}

function editClass_Spell(Pf_Class_ID, Pf_Spell_ID){
    //event.preventDefault();
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Pf_Class_ID=" + Pf_Class_ID + "&";
    payload += "Pf_Spell_ID=" + Pf_Spell_ID;
    req.open('GET', "/editClass_Spell?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            ClassSpellDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function editClass_Weapon(Pf_Class_ID, Pf_Weapon_ID){
    //event.preventDefault();
    console.log("editItem pressed");
    var req = new XMLHttpRequest();
    var payload = "";
    payload += "Pf_Class_ID=" + Pf_Class_ID + "&";
    payload += "Pf_Weapon_ID=" + Pf_Weapon_ID;
    req.open('GET', "/editClass_Weapon?" + payload, true);
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
            console.log("delete test");
            ClassWeaponDraw(req.response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }});
    req.send(null);
}

function bindButtons(){
    document.getElementById('Class Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Class_Name=" + document.getElementById('Column2').value +"&";
        payload += "Skill_Points=" + document.getElementById('Column3').value +"&";
        payload += "Hit_Dice=" + document.getElementById('Column4').value +"&";
        payload += "Pf_Book_ID=" + document.getElementById('Column5').value;

        req.open('GET', "/insertClass?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                classDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Book Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Book_Name=" + document.getElementById('Column2').value +"&";
        payload += "Total_Page_Number=" + document.getElementById('Column3').value;

        req.open('GET', "/insertBook?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                bookDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Spell Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Spell_Name=" + document.getElementById('Column2').value +"&";
        payload += "Spell_Type=" + document.getElementById('Column3').value +"&";
        payload += "Pf_Book_ID=" + document.getElementById('Column4').value;

        req.open('GET', "/insertSpell?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                spellDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Weapon Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Weapon_Name=" + document.getElementById('Column2').value +"&";
        payload += "Damage=" + document.getElementById('Column3').value +"&";
        payload += "Weapon_Type=" + document.getElementById('Column4').value +"&";
        payload += "Pf_Book_ID=" + document.getElementById('Column5').value;

        req.open('GET', "/insertWeapon?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                weaponDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Class_Spell Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Pf_Class_ID=" + document.getElementById('Column1').value +"&";
        payload += "Pf_Spell_ID=" + document.getElementById('Column2').value;

        req.open('GET', "/insertClass_Spell?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassSpellDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Class_Weapon Submit').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Pf_Class_ID=" + document.getElementById('Column1').value +"&";
        payload += "Pf_Weapon_ID=" + document.getElementById('Column2').value;

        req.open('GET', "/insertClass_Weapon?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassWeaponDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Class Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewClass", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                classDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Book Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewBook", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                bookDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Spell Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewSpell", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                spellDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Weapon Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewWeapon", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                weaponDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Class_Spell Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewClass_Spell", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassSpellDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Class_Weapon Display').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();

        req.open('GET', "/viewClass_Weapon", true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassWeaponDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});

        req.send(null);
    });

    document.getElementById('Class_Weapons_view').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Pf_Class_ID=" + document.getElementById('Class_ID').value;

        req.open('GET', "/class_usable_weapons?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassUsableWeaponsDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });

    document.getElementById('Class_Spells_view').addEventListener('click', function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = "";
        payload += "Pf_Class_ID=" + document.getElementById('Class_ID').value;

        req.open('GET', "/class_usable_spells?" + payload, true);
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                console.log("async test");
                ClassUsableSpellsDraw(req.response);
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        console.log(payload);
        req.send(null);
    });
};