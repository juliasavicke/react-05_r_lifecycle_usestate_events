import { useState, Fragment } from 'react';

function MainTitle() {
  console.log('App.jsx created');
  const [h1Size, setH1Size] = useState('1rem');

  //paspaudus ant h1 el padidinti jo dydi iki 2rem
  function sizeHandler() {
    setH1Size('2rem');
  }

  function increaseTitleSizeHandler() {
    setH1Size((prevH1Size) => {
      console.log('prevH1Size ===', prevH1Size);
      let skDalisBeRem = parseFloat(prevH1Size);
      console.log('skDalisBeRem ===', skDalisBeRem);
      skDalisBeRem++;
      return `${skDalisBeRem}rem`;
    });
  }
  return (
    <>
      {/* grazinti h1 dydi i 2rem */}
      <button onClick={sizeHandler}>reset</button>
      <h1 style={{ fontSize: h1Size }} onClick={increaseTitleSizeHandler}>
        Lifecycle
      </h1>
    </>
  );
}
export default MainTitle;
