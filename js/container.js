const createContainer = function () {

    const section = document.createElement('section');
    section.id = 'container';
    section.className = 'content';

    document.body.appendChild(section);
}

const createList = function (arg) {
    const container = document.getElementById('container');
    const list = document.createElement('dd');
    list.id = arg;
    container.appendChild(list);

    const titleList = document.createElement('dt');
    titleList.textContent = arg;
    list.appendChild(titleList);
    return list;
}

export { createContainer, createList };