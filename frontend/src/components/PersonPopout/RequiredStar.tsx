import React, { useContext } from "react";

import { ContextMobile } from "../../HomePage";

function RequiredStar() {
  const { required } = useContext<any>(ContextMobile);

  return <span>{required && <span className="required-star">*</span>}</span>;
}

export default RequiredStar;
