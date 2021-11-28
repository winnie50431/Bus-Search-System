const formatTime = (seconds) => {
    let min = parseInt( seconds / 60 );
    let sec = (seconds % 60 );
  return `${min}:${sec}`
};

global.helper = {
  formatTime,
};
