async function getMyReposFromGithub() {
  try {
    const URL = 'https://api.github.com/users/Gustavo-trybedev/repos';
    const request = await fetch(URL);
    const result = await request.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export default getMyReposFromGithub;
