"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AllUsers } from "./AllUsers"

export const AccordionUI = () => {
  return (
    <section className="w-[40rem]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>All users</AccordionTrigger>
          <AccordionContent>
            <AllUsers />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
