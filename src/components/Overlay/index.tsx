import { FilterSearch } from "../FilterSearch";
import { ModelProperty } from "../ModelProperty";

export const Overlay = () => {
  return (
    <div className="flex flex-col flex-1 p-1 bg-[#161616]">
      <FilterSearch />
      <ModelProperty />
    </div>
  );
};
