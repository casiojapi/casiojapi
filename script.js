const APIURL = "https://api.github.com/users/";

get_repos("casiojapi");

async function get_repos(username) {
    const resp = await fetch(APIURL + username + "/repos");
    const resp_data = await resp.json();

    add_repos_to_card(resp_data)
}

function add_repos_to_card(repos) {
    const all_repos_div = document.getElementById("repos");
    console.log(repos);
    repos.forEach(repo => {
        if (repo.homepage) { // just the ones with github pages (or webpage)
            const elem_div = document.createElement('div');
            elem_div.classList.add("repo");

            const repo_elem = document.createElement('a');
            repo_elem.href = repo.homepage;
            repo_elem.target = "_blank";
            repo_elem.innerText = repo.name;
            elem_div.appendChild(repo_elem);

            const repo_description = document.createElement('p')
            repo_description.innerText = repo.description;
            elem_div.appendChild(repo_description);

            all_repos_div.appendChild(elem_div);
        }
    })
}
