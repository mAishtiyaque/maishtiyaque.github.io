import { skills } from '../../db/db.js';

function populateHTML(items, id) {
    var skillsTag = document.getElementById(id);
    for (var i = 0; i < items.length; i++) {
        var divGroup = document.createElement("div");
        divGroup.style.color = items[i].color;
        if (items[i].type != 'img') {
            var divIcon = document.createElement("div");
            divIcon.className = "p-0 m-1 " + items[i].icon;
            //divIcon.setAttribute("icon",items[i].icon);
            divGroup.append(divIcon);
        }
        else {
            let imgIcon = document.createElement('img');
            imgIcon.setAttribute("src", items[i].icon);
            divGroup.append(imgIcon)
        }
        var title = document.createElement("h4");
        title.innerHTML = items[i].title;
        divGroup.append(title);

        skillsTag.append(divGroup);
    }
}

populateHTML(skills.language, 'language');
populateHTML(skills.technology, 'technology');
populateHTML(skills.database, 'database');
populateHTML(skills.tools, 'tools');
populateHTML(skills.softskill, 'softskill');