'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-soft">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left text-slate-100"
              aria-expanded={open}
            >
              <span className="text-base font-semibold">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`transition-[max-height] duration-300 ease-out overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
