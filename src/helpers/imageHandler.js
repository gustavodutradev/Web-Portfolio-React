import pixelArt from '../data/reposImages/pixelart.png';
import playgroundFunctions from '../data/reposImages/playground.jpg';
import elections from '../data/reposImages/elections.jpg';
import lessons from '../data/reposImages/lessons.png';

function ImageHandler(title) {
  switch (title) {
  case 'Project-Pixels-Art':
    return pixelArt;
  case 'Project-Playground-Functions':
    return playgroundFunctions;
  case 'counting-of-elections-2022':
    return elections;
  case 'Project-Lessons-Learned':
    return lessons;
  default: console.log('Image not found');
  }
}

export default ImageHandler;
