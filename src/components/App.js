import React from "react";
import EnterScreen from "./EnterScreen";
import FlashScreen from "./FlashScreen";
import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
  const [page, setPage] = React.useState("screenOne");
  return page === "screenOne" ? (
    <EnterScreen showScreenTwo={(screen) => setPage(screen)} />
  ) : (
    <FlashScreen />
  );
}
