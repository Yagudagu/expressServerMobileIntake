import React, { useContext } from "react";

import HatCoatGloves from "./Selectors/HatCoatGloves";
import AnythingElse from "./Selectors/AnythingElse";
import ShoeSize from "./Selectors/ShoeSize";
import ShirtSize from "./Selectors/ShirtSize";
import PantsSize from "./Selectors/PantsSize";
import { ContextMobile } from "../../HomePage";

const Child = () => {
  const { people, selectedPersonIndex } = useContext<any>(ContextMobile);

  return (
    <form id="form-information">
      <div className="sections">
        {people[selectedPersonIndex].sex && (
          <div>
            <div>
              <ShirtSize />
              <PantsSize />
              <ShoeSize />
              <HatCoatGloves />
              <AnythingElse />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Child;
