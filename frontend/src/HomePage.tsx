import { createContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// Components
import Languages from "./components/Languages";
import AvailableDays from "./components/DayComponents/AvailableDays";
import MainTextTop from "./components/MainTextTop";
import FamilyInputs from "./components/FamilyInputs";

// Other Local Imports
import "./css/App.css";
import { People, Day, Household } from "./models";
import { sampleDays, sampleHouseHold } from "./initialStates";

// Popups
import Popup from "./components/PersonPopout/Popup";
import SubmittedPopup from "./components/SubmittedPopup";
import ErrorPopup from "./components/ErrorPopup";
import API from "./API";

interface AppContextInterface {
  handlePeopleChange: (changes: any) => void;
}

export const ContextMobile = createContext<AppContextInterface | null>(null);


const HomePage: React.FC = () => {
  const { t } = useTranslation("ns1");
  const [popup, setPopup] = useState<boolean>(false);
  const [submittedPopup, setSubmittedPopup] = useState<boolean>(false);
  const [people, setPeople] = useState<People[]>([]);
  const [selectedPersonId, setSelectedPersonId] = useState<string>("");
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number>(0);
  const [days, setDays] = useState<Day[]>(sampleDays);
  const [household, setHousehold] = useState<Household>(sampleHouseHold);
  const [errorPopup, setErrorPopup] = useState<boolean>(false);
  const [required, setRequired] = useState<boolean>(false);
  const [manPants, setManPants] = useState<boolean>(false);

  const houseInfoRef = useRef<any>();

  // Turn right to left for dari
  const currentLanguageCode = cookies.get("i18next") || "en";

  useEffect(() => {
    currentLanguageCode === "dari"
      ? (document.body.dir = "rtl")
      : (document.body.dir = "ltr");
  }, [currentLanguageCode]);

  useEffect(() => {
    setHousehold((prevState) => {
      prevState.daysAvailable2 = days;
      return prevState;
    });
  }, [days]);

  const handleSubmitOrder = () => {
    // Check required fields
    const inputs: HTMLInputElement[] = [
      ...houseInfoRef.current.querySelectorAll("input"),
    ];

    // inputs.forEach((input: HTMLInputElement) =>
    //   input.setCustomValidity("Please fill in all the required fields.")
    // );

    const allValid = inputs.every((input: HTMLInputElement) =>
      input.reportValidity()
    );

    if (allValid) {
      // 1) Submit the order to the api

      var url = `${API.url()}/api/processrequest`;

      const totalPackage = { household, people };

      axios
        .post(url, totalPackage)
        .then((res) => {
          console.log(res);

          // 2) Clear the state
          setPeople([]);
          setHousehold(sampleHouseHold);
          setDays(sampleDays);

          // 3) Popout that says Completed
          setSubmittedPopup(true);
        })
        .catch((err) => {
          console.log(err);

          setErrorPopup(true);
          setRequired(false);
        });
    } else {
      setRequired(true);
    }
  };

  const handleHouseHoldChange = (changes: any) => {
    const newHousehold = { ...household, ...changes };
    setHousehold(newHousehold);
  };

  const handlePeopleChange = (changes: any) => {
    const newPeople = [...people];
    const index = newPeople.findIndex((r) => r.id === selectedPersonId);
    newPeople[index] = { ...newPeople[index], ...changes };
    setPeople(newPeople);
  };

  const handleChecksChange = (changes: any) => {
    const newPeople = [...people];
    const index = newPeople.findIndex((r) => r.id === selectedPersonId);

    newPeople[index].hatCoatGloves = {
      ...newPeople[index].hatCoatGloves,
      ...changes,
    };
    setPeople(newPeople);
  };

  const handleAddPerson = () => {
    const newPerson = {
      id: uuidv4(),
      CA: "",
      firstName: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      sex: "",
      shirtSize: "",
      shoeSize: "",
      hatCoatGloves: {
        hat: false,
        coat: false,
        gloves: false,
        swimsuit: false,
        sandals: false,
        summerHat: false,
      },
      inseamLength: "",
      waist: "",
      braSize: "",
      pantsSize: "",
      anythingElse: "",
    };

    setSelectedPersonIndex(people.length);
    setPeople([...people, newPerson]);
    setSelectedPersonId(newPerson.id);
    setPopup(true);
  };

  const handleEdit = (id: string, index: number) => {
    setSelectedPersonIndex(index);
    setSelectedPersonId(id);

    setPopup(true);
  };

  const handleRemove = (id: string) => {
    const newPeople = [...people];
    const index = newPeople.findIndex((r) => r.id === id);
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  const contextValue = {
    handlePeopleChange,
    handleChecksChange,
    people,
    selectedPersonIndex,
    required,
    setRequired,
    manPants,
  };

  return (
    <ContextMobile.Provider value={contextValue}>
      <div className="app">
        <Languages />
        <MainTextTop t={t} />
        <FamilyInputs
          household={household}
          handleHouseHoldChange={handleHouseHoldChange}
          houseInfoRef={houseInfoRef}
          required={required}
        />
        <AvailableDays t={t} days={days} setDays={setDays} />
        <p>{t("please_add")}</p>
        <div className="btn" onClick={() => handleAddPerson()}>
          {people.length === 0 ? t("add_person") : t("add_another_person")}
        </div>

        {people.map((p, index) => {
          return (
            <div key={p.id}>
              {
                <div id="people-container">
                  <div className="people-container-child">{index + 1})</div>
                  <div id="firstName" className="people-container-child">
                    {p.firstName}
                  </div>

                  <div
                    id="remove-btn"
                    className="people-container-child"
                    onClick={() => handleEdit(p.id, index)}
                  >
                    ({t("edit")})
                  </div>
                  <div
                    id="remove-btn"
                    className="people-container-child"
                    onClick={() => handleRemove(p.id)}
                  >
                    ({t("remove")})
                  </div>
                </div>
              }
            </div>
          );
        })}
        {people.length !== 0 && (
          <div className="btn" onClick={() => handleSubmitOrder()}>
            {t("submit_request")}
          </div>
        )}

        {popup && (
          <Popup
            setPopup={setPopup}
            people={people}
            selectedPersonIndex={selectedPersonIndex}
            t={t}
            required={required}
            setRequired={setRequired}
            setManPants={setManPants}
            manPants={manPants}
          />
        )}
        {submittedPopup && (
          <SubmittedPopup setSubmittedPopup={setSubmittedPopup} />
        )}
        {errorPopup && <ErrorPopup setErrorPopup={setErrorPopup} />}
      </div>
      <div className="footer">
        <div>
          {t("beth_el_1")}{" "}
          <a
            href="https://bethelmennonite.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("beth_el_2")}
          </a>
          {t("beth_el_3")}
          <a href="mailto: mobileclothes@bmccs.org">{t("beth_el_4")}</a>
          {"."}
        </div>
      </div>
    </ContextMobile.Provider>
  );
};

export default HomePage;
