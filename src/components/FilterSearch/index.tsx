import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
import { MdOutlineSearch } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { GiRobotGrab } from "react-icons/gi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useModelProperty } from "../../store/store";
import { useModel } from "../../store/useModel";
import { IoEyeOffOutline } from "react-icons/io5";
import { useMemo } from "react";

export const FilterSearch = () => {
  const { modelName, modelMeshs, setModelMeshs } = useModelProperty([
    "modelName",
    "modelMeshs",
    "setModelMeshs",
  ]);
  const { model } = useModel();
  const viewEyeHandle = (name: string) => {
    model.traverse((child: any) => {
      if (child.isMesh && child.name === name) {
        if (child.visible) {
          child.visible = false;
          updateModelMeshes();
        } else {
          child.visible = true;
          updateModelMeshes();
        }
      }
    });
  };

  const removeModelMesh = (name: string) => {
    model.traverse((child: any) => {
      if (child.isMesh && child.name === name) {
        child.parent.remove(child);
        updateModelMeshes();
      }
    });
  };

  const updateModelMeshes = () => {
    const loadedMeshes: any = [];
    model.traverse((child: any) => {
      if (child.isMesh) {
        loadedMeshes.push(child);
      }
    });
    setModelMeshs(loadedMeshes);
  };

  return (
    <>
      <div className="bg-[#1f1f1f] h-auto rounded-[5px] pl-3 pr-3 pt-3">
        <div className="flex items-center w-max gap-x-2 pb-3 border-b-[2px] border-[#177ddc]">
          <AiOutlineGlobal color="#177ddc" />
          <button className="text-[#177ddc] text-[14px]">Environment</button>
        </div>
      </div>
      <div className="bg-[#1f1f1f] h-auto rounded-[5px] p-3">
        <div className="flex items-stretch  gap-x-1">
          <div className="flex flex-1 border border-1 border-[#404040] rounded-[6px] overflow-hidden">
            <input
              type="text"
              placeholder="Search environment tree"
              className="bg-[#161616] flex-1 pl-1 text-white text-sm focus:outline-none placeholder-[#404040]"
            />
            <button className="bg-[#161616] border-l border-1 border-[#404040] px-[1px]">
              <MdOutlineSearch color="#404040" />
            </button>
          </div>
          <button className="bg-[#161616] border border-1 border-[#404040] rounded-[6px] px-[1px]">
            <AiOutlineFilter color="#404040" />
          </button>
        </div>
      </div>
      <div
        className="hs-accordion-treeview-root bg-[#1f1f1f] rounded-[6px] px-[1px] mt-1"
        role="tree"
        aria-orientation="vertical"
      >
        <div
          className="hs-accordion-group"
          role="group"
          data-hs-accordion-always-open=""
        >
          <div
            className="hs-accordion active"
            aria-expanded="true"
            id="hs-customize-tree-heading-one"
          >
            {modelName && (
              <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                <button
                  className="hs-accordion-toggle size-6 flex justify-center items-center rounded-md disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-expanded="true"
                  aria-controls="hs-customize-tree-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:rotate-90 transition duration-300 size-2.5 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                  </svg>
                </button>

                <div className="grow hs-accordion-selectable px-1.5 rounded-md cursor-pointer">
                  <div className="flex items-center gap-x-3">
                    <GiRobotGrab color="white" />
                    <div className="grow">
                      <span className="text-sm text-white dark:text-neutral-200">
                        {modelName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              id="hs-customize-tree-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              role="group"
              aria-labelledby="hs-customize-tree-heading-one"
            >
              <div
                className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-[#1f1f1f] dark:before:bg-[#1f1f1f]"
                role="group"
                data-hs-accordion-always-open=""
              >
                {modelMeshs &&
                  modelMeshs.map((item, index) => (
                    <div
                      className="hs-accordion"
                      aria-expanded="false"
                      id="hs-customize-tree-sub-heading-two"
                      key={index}
                    >
                      <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                        <button
                          className="hs-accordion-toggle size-6 flex justify-center items-center rounded-md disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          aria-expanded="false"
                          aria-controls="hs-customize-tree-sub-collapse-two"
                        >
                          <svg
                            className="transition duration-300 size-2.5 text-gray-600 dark:text-neutral-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="white"
                            viewBox="0 0 16 16"
                          >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                          </svg>
                        </button>

                        <LuNetwork color="white" />

                        <div className="grow hs-accordion-selectable px-1.5 rounded-md cursor-pointer">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="text-sm text-white dark:text-neutral-200">
                                {item.name}
                              </span>
                            </div>
                            <div className="flex gap-x-2 items-center">
                              <button onClick={() => viewEyeHandle(item.name)}>
                                {item.visible ? (
                                  <MdOutlineRemoveRedEye color="white" />
                                ) : (
                                  <IoEyeOffOutline color="white" />
                                )}
                              </button>
                              <button
                                onClick={() => removeModelMesh(item.name)}
                              >
                                <MdDelete color="white" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
