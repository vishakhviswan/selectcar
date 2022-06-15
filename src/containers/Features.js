import React, {  useState } from "react";
import { Container, Dropdown, DropdownButton, ListGroup } from "react-bootstrap";
import data from "../data/Nios"

import "./ContainerStyles.css";
function Features() {
  const [modelBtnName, setModelBtnName] = useState("Model");
  const [variantBtnName, setVariantBtnName] = useState("Variants")


  const [variants, setvariants] = useState([]);
  const [dtls, setDtls] = useState([]) 
  
  
  const handleModelBtn = (e) => {
    setDtls([]);
    setvariants([""]);
    setModelBtnName("Model");
    console.log("name", e.target.name);
    if (e.target.name === "Grand i10 Nios") {
      setModelBtnName(e.target.name)
      setvariants(["ERA", "MAGNA", "SPORTZ", "TURBO", "ASTA"]);

    } else if (e.target.name === "The All New i20") {
      setModelBtnName(e.target.name);
      setvariants(["Magna", "Sports", "Asta", "Asta (O)"]);

    } else if (e.target.name === "Venue") {
      setvariants(["E", "S", "S+", "S(O)", "SX", "SX(O)"]);
      setModelBtnName(e.target.name);
    } else if (e.target.name === "Verna") {
      setModelBtnName(e.target.name);
      setvariants(["E", "S+", "SX", "SX(O)", "SX(O)Turbo"]);
    } else if (e.target.name === "Creta") {
      setModelBtnName(e.target.name);
      setvariants(["E", "EX", "S", "SX EXECUTIVE", "SX", "SX(O)"]);
    } else if (e.target.name === "Alcazar") {
      setModelBtnName(e.target.name);
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

  const handleVariantBtn = (e) => {
    setDtls([]);
    setVariantBtnName(e.target.name)
    console.log("variant", e.target);
    if (modelBtnName === "Grand i10 Nios" && e.target.name === "ERA") {
      (data.map((obj) =>
      setDtls(obj.era)))
    }
    else if (modelBtnName === "Grand i10 Nios" && e.target.name === "MAGNA") {
      data.map((obj) => setDtls(obj.magna));
    } else {
      
          }
  }
  return (
    <div className="features-ParentDiv">
      <div className="features-ChildDiv">
        <div className="sample"></div>
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
                title={modelBtnName}
              >
                {modelBtnName}
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
              title={variantBtnName}
              className="mt-2"
            >
              {variants.map((obj) => (
                <Dropdown.Item
                  onClick={handleVariantBtn}
                  name={obj}
                  href="#/action-1"
                >
                  {obj}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="features-content">
            {dtls.map((obj) => (
              <ListGroup>
                <ListGroup.Item variant="danger" className="featuresHeading">
                  {obj.heading}
                </ListGroup.Item>
                <ListGroup.Item variant="danger" className="featuresHeading">
                  {obj.subheading}
                </ListGroup.Item>

                {obj.features.map((list) => (
                  <ListGroup.Item variant="primary">{list} </ListGroup.Item>
                ))}
              </ListGroup>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Features;
