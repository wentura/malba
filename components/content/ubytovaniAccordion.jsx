"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";
import "./ubytovaniAccordion.css";
import { data } from "./ubytovaniAccordionData.js";
export default function UbytovaniAccordion() {
  let x = 0;
  return (
    <Accordion
      selectionMode="multiple"
      isCompact
      variant="splitted"
      defaultExpandedKeys={["1"]}
      className="text-gray-500 focus:outline-none accordion sm:text-lg "
    >
      {data.map((item) => {
        x++;
        return (
          <AccordionItem
            key={x}
            aria-label={item.title}
            title={item.title}
            className="mb-2 text-gray-500 focus:outline-none accordion-item sm:text-lg"
          >
            {item.body}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
