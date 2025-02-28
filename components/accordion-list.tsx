"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface AccordionListProps {
  items: Array<{
    title: string
    description: string
  }>
}

export function AccordionList({ items }: AccordionListProps) {
  return (
    <Accordion type="single" collapsible className="w-full" aria-label="Frequently Asked Questions">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

