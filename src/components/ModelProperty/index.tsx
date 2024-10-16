import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLockOpen } from "react-icons/md";
import { useMemo } from "react";
import { useModelProperty } from "../../store/store";

export const ModelProperty = () => {
  const { modelName, modelPosition, modelRotation } = useModelProperty([
    "modelName",
    "modelPosition",
    "modelRotation",
  ]);

  const propertyValue = useMemo(() => {
    return { position: modelPosition, rotation: modelRotation };
  }, [modelPosition, modelRotation]);

  return (
    <div className="flex flex-1 mt-1">
      <div className="p-1 bg-[#1f1f1f] h-max rounded-tl-[6px] rounded-bl-[6px]">
        <AiOutlineAppstore color="white" />
      </div>
      <div className="flex-1 bg-[#1f1f1f] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] text-white text-sm p-3">
        <div className="bg-[#262626] flex flex-col gap-y-4 rounded-[6px] p-4">
          <div className="flex items-center justify-between">
            <p className="w-[80px] text-right">Name</p>
            <p>:</p>
            <input
              type="text"
              value={modelName}
              readOnly
              className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
            />
            <MdOutlineLockOpen />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Position X</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.position[0]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Y</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.position[1]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Z</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.position[2]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Rotation X</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.rotation[0]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Y</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.rotation[1]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
            <div className="flex items-center justify-between">
              <p className="w-[80px] text-right">Z</p>
              <p>:</p>
              <input
                type="text"
                value={propertyValue.rotation[2]}
                onChange={() => console.log(-0)}
                className=" rounded-[6px] bg-[#434343] text-white focus:outline-none px-2 py-1"
              />
              <MdOutlineLockOpen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
