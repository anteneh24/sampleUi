import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
import AccordionItemOneTable from "./AccordionItemOneTable";
import AccordionItemTwoTable from "./AccordionItemTwoTable";
import AccordionItemThree from "./AccordionItemThree";

export default function DiversityVisa() {
  return (
    <div className="p-10 px-20 bg-grayLight">
      <div className="flex items-center gap-2">
        <img src="/img/🦆 icon _document text_.png" alt="" />
        <h2 className="font-bold">Find the right visa for you!</h2>
      </div>
      <Accordion type="single" collapsible className="py-10">
        <AccordionItem
          value="item-1"
          className="border-b border-secondary/50 py-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-accent text-3xl font-normal">
              Diversity Visa Cost
            </p>
            <AccordionTrigger>
              <img src="/img/down_gray.png" />
            </AccordionTrigger>
          </div>
          <AccordionContent className="p-5 bg-white rounded-2xl my-5">
            <div className="flex items-center justify-between">
              <p className="border-l-4 px-4 border-blue-900 font-bold">
                Mandatory Government Fees for Green Cards
              </p>
              <button className="bg-orange-600 text-white rounded-xl p-2 px-6">
                Apply now
              </button>
            </div>
            <div className="pt-10">
              <AccordionItemOneTable />
            </div>
            <p className="text-sm text-right py-2">
              Fees are subject to change, please use{" "}
              <span className="underline underline-offset-2">
                this calculator
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-b border-secondary/50 py-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-accent text-3xl font-normal">
              Diversity Visa Timeline
            </p>
            <AccordionTrigger>
              <img src="/img/down_gray.png" />
            </AccordionTrigger>
          </div>
          <AccordionContent className="p-5 bg-white rounded-2xl my-5">
            <div className="flex items-center justify-between">
              <p className="border-l-4 px-4 border-blue-900 font-bold">
                The 2023 Green Card Lottery program year (also called DV2025)
                follows:
              </p>
              <button className="bg-orange-600 text-white rounded-xl p-2 px-6">
                Apply now
              </button>
            </div>
            <div className="py-10">
              <AccordionItemTwoTable />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-b border-secondary/50 py-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-accent text-3xl font-normal">
              Diversity Visa FAQs
            </p>
            <AccordionTrigger>
              <img src="/img/down_gray.png" />
            </AccordionTrigger>
          </div>
          <AccordionContent className="p-5 bg-white rounded-2xl my-5">
            <AccordionItemThree />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
