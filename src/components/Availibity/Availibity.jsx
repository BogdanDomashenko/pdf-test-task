import { PDFViewer } from "@react-pdf/renderer";
import { createContext } from "react";
import { Container } from "../ui/Container/Container";
import { AvailibityDocument } from "./AvailibityDocument";
import db from "../../assets/db.json";

const addressor = {
  companyName: "ARRIMO DIGITAL",
  firstName: "Tom",
  lastName: "Schlepp",
  street: "Schäringerstraße",
  streetNumber: 3,
  postalCode: 80634,
  location: "Berlin",
  telephone: "8912738676",
  email: "8912738676",
};

const addresse = {
  companyName: "Disciples München-Haar",
  firstName: "Sarah",
  lastName: "Enstone",
  street: "Keferloherstraße",
  streetNumber: 24,
  postalCode: 85540,
  location: "Haar",
};

const data1 = {
  staffmembers: db.filter((item) => item.id > 10),
  date: new Date(2022, 3, 12),
};

const data2 = {
  staffmembers: db.filter((item) => item.nationality === "DOM"),
  date: new Date(1988, 10, 8),
};

const data3 = {
  staffmembers: db.filter(
    (item) => item.location === "Dohren" || item.location === "Ansbach"
  ),
  date: new Date(2016, 7, 5),
};

export const Availibity = () => {
  return (
    <Container>
      <h3>{"1. DATE: 12.04.2022, All Staffmember with ID-value > 10"}</h3>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <AvailibityDocument
          addressor={addressor}
          addresse={addresse}
          date={data1.date}
          staffmembers={data1.staffmembers}
        />
      </PDFViewer>

      <h3>{"2. DATE: 08.11.1988 All Staffmember with Nationality = DOM"}</h3>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <AvailibityDocument
          addressor={addressor}
          addresse={addresse}
          date={data2.date}
          staffmembers={data2.staffmembers}
        />
      </PDFViewer>

      <h3>
        {
          "3. DATE: 05.08.2016 All Staffmember with Location = Ansbach or Dohren"
        }
      </h3>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <AvailibityDocument
          addressor={addressor}
          addresse={addresse}
          date={data3.date}
          staffmembers={data3.staffmembers}
        />
      </PDFViewer>
    </Container>
  );
};
