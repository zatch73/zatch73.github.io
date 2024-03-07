const repo_user = 'zatch73'
fetch(`https://api.github.com/users/${repo_user}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(repository => {
        let project_box = document.createElement('div');
        project_box.className = 'project_box';
        
        let project_title = document.createElement('h3');
        project_title.className = 'project_title';
        project_title.appendChild(document.createTextNode(repository.name))
        
        let project_description = document.createElement('p');
        project_description.className = 'project_description';
        project_description.appendChild(document.createTextNode(repository.description))
        
        let project_dates = document.createElement('div');
        project_dates.className = 'project_dates';
        let project_date1 = document.createElement('i');
        let project_date2 = document.createElement('i');
    
        project_date1.appendChild(document.createTextNode('Date realease: '+repository.created_at));
        project_date2.appendChild(document.createTextNode('Last update: '+repository.updated_at));
        project_dates.appendChild(project_date1)
        project_dates.appendChild(project_date2)
        project_box.appendChild(project_title);
        project_box.appendChild(project_description);
        project_box.appendChild(project_dates);
        document.getElementById('projects_box').appendChild(project_box);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });