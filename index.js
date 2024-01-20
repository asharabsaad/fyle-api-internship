// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://esm.sh/@octokit/core";
import { token } from "./token.js"
// export const token = token.js
const octokit = new Octokit({
    auth: token
  })
  
  // const data = await octokit.request('GET /users/asharabsaad/repos', {
  //   username: 'Asharab Saad',
  //   headers: {
  //     'X-GitHub-Api-Version': '2022-11-28'
  //   }
  // })
  // console.log(data)

  $('#getValueButton').on('click',function(){
    const username = $('#username').val()
    getRepositories(username)
  })

  const getRepositories = async (username) =>{
    const data = await octokit.request(`GET /users/${username}/repos`, {
      username: '${username}',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    console.log(data)
  }

  // $("li").click(function(){
  //   $("li").
  // })
  

  // let name = document.getElementById("user-name")
  // name.textContent = username