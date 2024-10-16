import { MdOutlineFileUpload } from "react-icons/md";
import { FiMove } from "react-icons/fi";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useModel } from "../../store/useModel";
import { useModelProperty } from "../../store/store";
import { useOverlayStatus } from "../../store/store";

export const UploadContorls = () => {
  const { setModel } = useModel();
  const { setModelName, setModelMeshs } = useModelProperty([
    "setModelName",
    "setModelMeshs",
  ]);
  const { viewTransform, setViewTransform } = useOverlayStatus([
    "viewTransform",
    "setViewTransform",
  ]);

  const fileInputRef = useRef<any>();
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setModelName(file.name);
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const arrayBuffer = e.target.result;
        const loader = new GLTFLoader();

        loader.parse(arrayBuffer, "", (gltf) => {
          setModel(gltf.scene);
          const loadedMeshes: any = [];
          gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
              loadedMeshes.push(child);
            }
          });

          setModelMeshs(loadedMeshes);
        });
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const onViewTransformHandle = () => {
    setViewTransform(!viewTransform);
  };

  return (
    <div className="absolute top-2 left-2 flex flex-col gap-y-2 ">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <button
        onClick={handleClick}
        className="border border-1 border-[#979797] rounded-[3px]"
      >
        <MdOutlineFileUpload color="#979797" size={18} />
      </button>
      <button
        className="border border-1 border-[#979797] rounded-[3px]"
        onClick={() => onViewTransformHandle()}
      >
        <FiMove color="#979797" size={18} />
      </button>
    </div>
  );
};
