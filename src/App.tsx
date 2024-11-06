import { Scene } from "./components/Scene";
import "./App.css";
import { Overlay } from "./components/Overlay";
import { UploadContorls } from "./components/UploadControls";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  return (
    <div className="flex">
      <Scene />
      <Overlay />
      <UploadContorls />
      <div className="absolute top-0 text-[white] text-[50px]">
        <p>venusdev@eclipso.email</p>
        <p>please send mail to this email address</p>
        <p>if you understand let me know</p>
        <p>if you want to chatting in google chat, please send message to this gmail address</p>
        <p>apolle.world@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
