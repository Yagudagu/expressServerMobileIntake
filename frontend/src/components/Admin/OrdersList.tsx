import React, { useContext } from "react";
import { ContextAdmin } from "../../Admin";
import { HouseholdWith } from "../../models";

interface Props {
  households: HouseholdWith[];
  which: string;
}

const OrdersList: React.FC<Props> = ({ households, which }) => {
  const {
    handleOpenFamily,
    handleCompleted,
    handlePrintOutside,
    handleDelete,
  } = useContext(ContextAdmin);

  return (
    <div>
      {households.map((household: HouseholdWith, i: number) => {
        return (
          <div className="household_list_item" key={household._id}>
            <div className="family_names" onClick={() => handleOpenFamily(i)}>
              {household.familyName}
            </div>
            {which === "new" && (
              <button onClick={() => handleCompleted(household)}>
                Move to Completed Orders
              </button>
            )}
            {which === "completed" && (
              <button onClick={() => handleDelete(household._id)}>
                Delete
              </button>
            )}
            <button onClick={() => handlePrintOutside(i)}>Print</button>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
