import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode
}

export function Section (props: SectionProps) {

  return(
    <section id={props.id}
    className="min-h-screen w-screen max-w-screen-xl flex items-center flex-col gap-4 py-20 my-0 mx-auto">
      <div className="w-full h-[2px] bg-black"></div>
      {props.children}
    </section>
  )

}