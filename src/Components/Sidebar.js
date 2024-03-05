{/* <nav>
  <div id="projects">
    <div id="defaultProjects">
      <button id="myDay" class="active">
        <div><i class="fa-regular fa-sun"></i>My Day</div>
        <span data-count></span>
      </button>
      <button id="starred">
        <div><i class="fa-regular fa-star"></i>Starred</div>
        <span data-count></span>
      </button>
      <button id="planned">
        <div><i class="fa-solid fa-list-check"></i>Planned</div>
        <span data-count></span>
      </button>
      <button id="tasks">
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

function defaultProjectButton(id, opac, icon, text) {
  const defProj = document.createElement('button');
  defProj.id = id;

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

export default function() {
  const nav = document.createElement('nav');

  const projects = document.createElement('div');
  projects.id = 'projects';

  const defaultProjects = document.createElement('div');
  defaultProjects.id = 'defaultProjects';

  const myDay = defaultProjectButton('myDay', 'fa-regular', 'fa-sun', 'My Day');
  myDay.classList.add('active');
  const starred = defaultProjectButton('starred', 'fa-regular', 'fa-star', 'Starred');
  const planned = defaultProjectButton('planned', 'fa-solid', 'fa-list-check', 'Planned');
  const tasks = defaultProjectButton('tasks', 'fa-solid', 'fa-house', 'Tasks');

  const hr = document.createElement('hr');

  const userProjects = document.createElement('div');
  userProjects.id = 'userProjects';

  const addProjectBtn = document.createElement('button');
  addProjectBtn.id = 'addProject';

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