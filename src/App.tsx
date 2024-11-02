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
      {/* <Scene />
      <Overlay />
      <UploadContorls /> */}
      <p>How about discuss on another chatting app?</p>
      <p>discord: apo585</p>
      <p>skype: live:.cid.bb2a9bddc1d4732a</p>
      <p>gmail: apolle.world@gmail.com</p>
    </div>
  );
}

export default App;
