// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://esm.sh/@octokit/core";
import { token } from "./token.js"

const octokit = new Octokit({
    auth: token
  })
  

  $('#getValueButton').on('click',function(){
    const username = $('#username').val()
    getUserAndRepositories(username)
  })

  const getUserAndRepositories = async (username) => {
    try {
      // Fetch user information
      const userResponse = await octokit.request(`GET /users/${username}`);
      const user = userResponse.data;
  
      // Fetch user repositories
      const reposResponse = await octokit.request(`GET /users/${username}/repos`);
      const repositories = reposResponse.data;
  
      // Update user information in the DOM
      $('#user-name').val(user.login);
      $('#user-bio').text(user.bio || 'Bio or additional information about the user.');
      $('#followersCount').text(user.followers);
      $('#followingCount').text(user.following);
  
      // Update repositories in the DOM
      const repositoriesList = $('#repositoriesList');
      repositoriesList.empty(); // Clear previous data
  
      repositories.forEach(repo => {
        const repoItem = `
          <div class="col-md-6 card_body">
            <div class="repo-item p-3 mb-3">
              <h3>${repo.name}</h3>
              <p>${repo.description || 'No description available'}</p>
              <p class="lang-use">${repo.language || 'Language not specified'}</p>
            </div>
          </div>`;
        repositoriesList.append(repoItem);
      });
  
      // Pagination logic can be added here if needed
  
    } catch (error) {
      console.error('Error fetching GitHub user information:', error);
    }
  };

//   const getRepositories = async (username) =>{
//     const data = await octokit.request(`GET /users/${username}/repos`, {
//       username: '${username}',
//       headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//       }
//     })
//     console.log(data)
//   }


  // let name = document.getElementById("user-name")
  // name.textContent = username