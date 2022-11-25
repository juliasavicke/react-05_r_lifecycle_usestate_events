import { useState } from 'react';

function Title(props) {
  console.log('Title.jsx created');

  let toShow = true;
  // toShowState vietinis kintamasis kuri galim atvaizuoti ir jo reiksme pakeiciam su setToShowState (nauja reiksme)
  const [toShowState, setToShowState] = useState(true);
  console.log('toShowState ===', toShowState);
  // !!!! niekada neprilyginti toShowState kazkam su '=', pvs toShowState = false.

  function titleHideHandler() {
    console.log('titleHideHandler');
    setToShowState(false); //panaudojau setToShowState fn kad pakeisciau toShowState reiksme i false
  }

  //paspaudus mygtuka keisti toShowState is true i false ir atvirkciai

  // apsirasyti toggleTitleHandler funkcija
  function toggleTitleHandler() {
    //toShowState ? setToShowState(false) : setToShowState(true);

    //kai musu keiciamas state priklauso nuo buvusio state tai mes turim atnaujinti argumente su funkcija
    //setToShowState(!toShowState); //veiks paprastom aplinkybem paprastoj aplikacijoj
    //teisingas pakeitimas butu toks:
    setToShowState((prevToShowState) => !prevToShowState); //kai state priklauso nuo pries tai buvusio
  }

  return (
    <div>
      <h3>toShowState reiksme: {toShowState.toString()}</h3>
      {toShowState && <h2>{props.children}</h2>}
      <button onClick={toggleTitleHandler}>
        {toShowState ? 'Hide' : 'Show'} title
      </button>
    </div>
  );
}
export default Title;
