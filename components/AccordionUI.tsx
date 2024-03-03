"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AllUsers } from "./AllUsers"
import { SpecificUser } from "./SpecificUsers"
import { CreateUser } from "./CreateUser"
import { UpdateUser } from "./UpdateUser"
import { DeleteUser } from "./DeleteUser"

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

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Search for specific user</AccordionTrigger>
          <AccordionContent>
            <SpecificUser />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Create new user</AccordionTrigger>
          <AccordionContent>
            <CreateUser />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Update new user</AccordionTrigger>
          <AccordionContent>
            <UpdateUser />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Delete a user</AccordionTrigger>
          <AccordionContent>
            <DeleteUser />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
