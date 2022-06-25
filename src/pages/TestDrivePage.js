import React from "react";
import NavbarMain from "../components/Navbar";
import TestDrive from "../containers/TestDrive";

function TestDrivePage() {
  return (
    <div className="testdrivePage_ParentDiv">
          <div className="testDrivePage_ChildDiv">
              <NavbarMain />
              <TestDrive/>
              TestDrivePage</div>
    </div>
  );
}

export default TestDrivePage;
