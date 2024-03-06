export function ProjectButton(opac, icon, text) {
  const Project = document.createElement('button');
  Project.classList.add("project");

  const div = document.createElement('div');

  const i = document.createElement('i');
  i.classList.add(opac, icon);

  const textSpan = document.createElement('span');
  textSpan.textContent = text
  
  const count = document.createElement('span');
  count.dataset.count = 0;
  
  div.appendChild(i);
  div.appendChild(textSpan);
  
  Project.appendChild(div);
  Project.appendChild(count);

  return Project;
}