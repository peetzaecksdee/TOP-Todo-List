{/* <nav>
  <div id="projects">
    <div id="defaultProjects">
      <button id="project" class="active">
        <div><i class="fa-regular fa-sun"></i>My Day</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-regular fa-star"></i>Starred</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-list-check"></i>Planned</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-house"></i>Tasks</div>
        <span data-count></span>
      </button>
    </div>
    <hr>
    <div id="userProjects"></div>
  </div>
  <button id="addProject">New list</button>
</nav> */}

import './Sidebar.css';

function defaultProjectButton(opac, icon, text) {
  const defProj = document.createElement('button');
  defProj.id = "project";

  const div = document.createElement('div');

  const i = document.createElement('i');
  i.classList.add(opac, icon);

  const textSpan = document.createElement('span');
  textSpan.textContent = text
  
  const count = document.createElement('span');
  count.dataset.count = '';
  
  div.appendChild(i);
  div.appendChild(textSpan);
  
  defProj.appendChild(div);
  defProj.appendChild(count);

  return defProj;
}

function setActive(button) {
  const buttons = document.querySelectorAll('#project');
  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove('active');
    }
    button.classList.add('active');
  });
}

export default function() {
  const nav = document.createElement('nav');

  const projects = document.createElement('div');
  projects.id = 'projects';

  const defaultProjects = document.createElement('div');
  defaultProjects.id = 'defaultProjects';

  const myDay = defaultProjectButton('fa-regular', 'fa-sun', 'My Day');
  myDay.classList.add('active');
  myDay.addEventListener('click', () => {
    if (myDay.classList.contains('active')) {
      return;
    }

    setActive(myDay);
  });
  const starred = defaultProjectButton('fa-regular', 'fa-star', 'Starred');
  starred.addEventListener('click', () => {
    if (starred.classList.contains('active')) {
      return;
    }

    setActive(starred);
  });
  const planned = defaultProjectButton('fa-solid', 'fa-list-check', 'Planned');
  planned.addEventListener('click', () => {
    if (planned.classList.contains('active')) {
      return;
    }

    setActive(planned);
  });
  const tasks = defaultProjectButton('fa-solid', 'fa-house', 'Tasks');
  tasks.addEventListener('click', () => {
    if (tasks.classList.contains('active')) {
      return;
    }

    setActive(tasks);
  });

  const hr = document.createElement('hr');

  const userProjects = document.createElement('div');
  userProjects.id = 'userProjects';

  const addProjectBtn = document.createElement('button');
  addProjectBtn.id = 'addProject';
  addProjectBtn.textContent = 'New List';

  defaultProjects.appendChild(myDay);
  defaultProjects.appendChild(starred);
  defaultProjects.appendChild(planned);
  defaultProjects.appendChild(tasks);

  projects.appendChild(defaultProjects);
  projects.appendChild(hr);
  projects.appendChild(userProjects);

  nav.appendChild(projects);
  nav.appendChild(addProjectBtn);

  return nav
}