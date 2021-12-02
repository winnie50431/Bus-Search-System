export const formatTime = (seconds) => {
    if( !seconds){ return }
    let min = parseInt( seconds / 60 );
    let sec = (seconds % 60 );
  return `${min}:${sec}`
};
