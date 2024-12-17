"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import "./ubytovaniAccordion.css";
import { data } from "./ubytovaniAccordionData.js";
export default function UbytovaniAccordion() {
  return (
    <Accordion
      selectionMode="multiple"
      isCompact
      variant="splitted"
      defaultExpandedKeys={["0"]}
      className="focus:outline-none accordion"
    >
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={item.title}
            className="mb-2  focus:outline-none accordion-item "
          >
            {item.body}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
