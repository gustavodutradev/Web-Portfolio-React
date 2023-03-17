function ImageHandler(title) {
  switch (title) {
  case 'Project-Pixels-Art':
    return 'https://criticalhits.com.br/wp-content/uploads/2022/03/goku_an6e.h720-768x561.webp';
  case 'Project-Playground-Functions':
    return 'https://sm.ign.com/t/ign_br/screenshot/default/dragon-ball-super-super-hero-bulma_y33z.960.jpg';
  default: console.log('Image not found');
  }
}

export default ImageHandler;
