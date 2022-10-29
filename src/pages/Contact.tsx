import { Checkbox } from "../components/CheckBox";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Section } from "../components/Section";

import reCAPTCHA from "react-google-recaptcha"
import { ReCAPTCHAForm } from "../components/ReCAPTCHAForm";
import { Button } from "../components/Button";


export function Contact() {

  return (
    <Section id="contact">

      <h2>Contato</h2>

      <form action="">

        <label htmlFor=""> Nome
          <Input placeholder="Nome" />
        </label>

        <label htmlFor="">
          <Input placeholder="Email" />
        </label>

        <label htmlFor="">
          <Input placeholder="Telefone" />
        </label>

        <label htmlFor=""> deixe sua mensagem
          <textarea name="" id="">

          </textarea>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2 text-2xs'>
          <Checkbox id='remember' />
          Eu concordo com a Política de Privacidade.
        </label>

           <ReCAPTCHAForm />

           

           <Button>Enviar</Button>


      </form>
    </Section>
  )
}