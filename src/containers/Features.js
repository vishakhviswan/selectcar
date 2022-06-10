import React, { useState } from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import i10safety from "../data";

import "./ContainerStyles.css";
function Features() {

  console.log("data", i10safety[0].subheading, i10safety);

  const [variants, setvariants] = useState([]);
  const handleModelBtn = (e) => {
    setvariants([""]);
    console.log("name", e.target.name);
    if (e.target.name === "Grand i10 Nios") {
      setvariants(["ERA", "MAGNA", "SPORTZ", "TURBO", "ASTA"]);
    } else if (e.target.name === "The All New i20") {
      setvariants(["Magna", "Sports", "Asta", "Asta (O)"]);
    } else if (e.target.name === "Venue") {
      setvariants(["E", "S", "S+", "S(O)", "SX", "SX(O)"]);
    } else if (e.target.name === "Verna") {
      setvariants(["E", "S+", "SX", "SX(O)", "SX(O)Turbo"]);
    } else if (e.target.name === "Creta") {
      setvariants(["E", "EX", "S", "SX EXECUTIVE", "SX", "SX(O)"]);
    } else if (e.target.name === "Alcazar") {
      setvariants([
        "Prestige MT",
        "Prestige (O) AT",
        "Platinum MT",
        "Platinum (O) AT",
        "Signature MT",
        "Signature (O) AT",
      ]);
    }
  };
  return (
    <div className="features-ParentDiv">
      <div className="features-ChildDiv">
        <Container>
          <div className="features-title">Features</div>
          <div className="features-subtitle">
            See your exciting features here!
          </div>
          <div className="features-buttons">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                Model
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="Grand i10 Nios"
                  href="#/action-1"
                  active
                >
                  Grand i10 Nios
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="The All New i20"
                  href="#/action-2"
                >
                  The All New i20
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="Venue"
                  href="#/action-2"
                >
                  Venue
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="Verna"
                  href="#/action-2"
                >
                  Verna
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="Creta"
                  href="#/action-2"
                >
                  Creta
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleModelBtn}
                  name="Alcazar"
                  href="#/action-2"
                >
                  Alcazar
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <DropdownButton
              id="dropdown-button-dark-example2"
              variant="secondary"
              menuVariant="dark"
              title="Variant"
              className="mt-2"
            >
              {variants.map((obj) => (
                <Dropdown.Item href="#/action-1">{obj}</Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="features-content">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              molestiae, similique in temporibus sed adipisci necessitatibus
            </h1>
          </div>
        </Container>
      </div>
      Features Container
    </div>
  );
}

export default Features;
