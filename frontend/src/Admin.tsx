import React, { useEffect, useState, useRef, createContext } from "react";
import { useReactToPrint } from "react-to-print";

import API from "./API";

import { HouseholdWith } from "./models";
import OrdersList from "./components/Admin/OrdersList";
import PrintPopout from "./components/Admin/PrintPopout";

// Components

export const ContextAdmin = createContext<any>(null);

interface Props {
  setLoggedIn: any;
}

const Admin: React.FC<Props> = ({ setLoggedIn }) => {
  const [repullHouseholds, setRepullHouseholds] = useState<string>("");
  const [allHouseholds, setAllHouseholds] = useState<any>([]);
  const [completedOrder, setCompletedOrder] = useState<HouseholdWith[]>([]);
  const [uncompleteOrder, setUncompleteOrder] = useState<HouseholdWith[]>([]);
  const [showHousehold, setShowHousehold] = useState<boolean>(false);
  const [toggleCompleted, setToggleCompleted] = useState<boolean>(false);
  const [openHouseholdIndex, setOpenHouseholdIndex] = useState<number>(0);
  const [dontDisplayHousehold, setDontDisplayHousehold] =
    useState<boolean>(false);

  // React to print
  const componentRef = useRef<any>();
  const printButtonRef = useRef<any>();

  useEffect(() => {
    API.fetchHouseholds().then((data) => setAllHouseholds(data));
  }, [repullHouseholds]);

  useEffect(() => {
    const uncomplete = allHouseholds.filter(
      (household: HouseholdWith) => household.isCompleted === false
    );
    setUncompleteOrder(uncomplete);

    const completed = allHouseholds.filter(
      (household: HouseholdWith) => household.isCompleted === true
    );
    setCompletedOrder(completed);
  }, [allHouseholds]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      .popup-inner-admin {
        overflow-y: none;
      } 
    `,
    onAfterPrint: () => {
      setShowHousehold(false);
      setDontDisplayHousehold(false);
    },
  });

  const handleCompleted = (household: HouseholdWith) => {
    API.updateHousehold(household, { isCompleted: true });
    setRepullHouseholds(Math.random().toString());
  };

  const handlePrintOutside = (i: number) => {
    setOpenHouseholdIndex(i);
    setShowHousehold(true);
    setDontDisplayHousehold(true);

    setTimeout(() => {
      console.log(componentRef.current);
      console.log(printButtonRef.current);
      printButtonRef.current.click();
    }, 1000);
  };

  const handleOpenFamily = (i: number) => {
    setOpenHouseholdIndex(i);
    setShowHousehold(true);
  };

  const handleCompletedToggle = () => {
    setToggleCompleted((prevState) => !prevState);
  };

  const handleDelete = (id: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this entry?"
    );

    if (confirmation) {
      API.deleteHousehold(id);
      setRepullHouseholds(Math.random().toString());
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    API.logout();
  };

  const ContextValue = {
    handleOpenFamily,
    handleCompleted,
    handlePrintOutside,
    handleDelete,
    handlePrint,
    setShowHousehold,
  };

  return (
    <ContextAdmin.Provider value={ContextValue}>
      <div className="admin_main">
        <button onClick={handleLogout}>Log Out</button>
        <div className="household_list">
          <div className="toggle_completed_box">
            <h2>View New or Completed Orders</h2>
            <label className="switch" onChange={handleCompletedToggle}>
              <input type="checkbox" />
              <span className="slider round" />
            </label>
          </div>
          {toggleCompleted ? (
            <OrdersList households={completedOrder} which="completed" />
          ) : (
            <OrdersList households={uncompleteOrder} which="new" />
          )}
          {showHousehold &&
            (toggleCompleted ? (
              <PrintPopout
                dontDisplayHousehold={dontDisplayHousehold}
                componentRef={componentRef}
                printButtonRef={printButtonRef}
                openHouseholdIndex={openHouseholdIndex}
                houseHolds={completedOrder}
              />
            ) : (
              <PrintPopout
                dontDisplayHousehold={dontDisplayHousehold}
                componentRef={componentRef}
                printButtonRef={printButtonRef}
                openHouseholdIndex={openHouseholdIndex}
                houseHolds={uncompleteOrder}
              />
            ))}
        </div>
      </div>
    </ContextAdmin.Provider>
  );
};

export default Admin;
