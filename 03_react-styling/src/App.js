import Card from "./components/card/Card";
import Inline from "./components/inline-style/Inline";
import ModuleBtn from "./components/moduleCss/ModuleBtn";

import StyleSheet from "./components/regular-style/StyleSheet";
import Data from './data'



const App = () => {
  return (
    <>
      <Inline/>
      <StyleSheet secenek = {true}/>
      <Card veri={Data}/>
      <ModuleBtn btnStyle='first' btnName='enroll'/>
      <ModuleBtn btnStyle='second' btnName='delete'/>
    </>
  );
};

export default App;
