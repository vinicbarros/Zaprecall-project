import React from "react";
import EnterScreen from "./EnterScreen";
import FlashScreen from "./FlashScreen";

export default function App() {
  const [page, setPage] = React.useState("screenOne");
  console.log(page);
  return page === "screenOne" ? (
    <EnterScreen showScreenTwo={(screen) => setPage(screen)} />
  ) : (
    <FlashScreen />
  );
}
