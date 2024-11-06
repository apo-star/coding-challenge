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
    </div>
  );
}

export default App;
