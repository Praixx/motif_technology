import { Outlet } from "react-router-dom";
import Header from "./Header";

function Applayout() {
  return (
    <div className="w-dvw">
      <Header />
      <div >
        <main >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Applayout;
