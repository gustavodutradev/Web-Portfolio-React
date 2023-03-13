const getMyReposFromGithub = async () => {
  try {
    const URL = 'https://api.github.com/users/Gustavo-trybedev/repos';
    const request = await fetch(URL);
    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error, 'Failed to request repos');
  }
};

export default getMyReposFromGithub;
