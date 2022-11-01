import { Checkbox } from "../components/CheckBox";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Section } from "../components/Section";

import { ReCAPTCHAForm } from "../components/ReCAPTCHAForm";
import { Button } from "../components/Button";
import { CountrySelector } from "../components/CountrySelector";
import { FormEvent, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

export function Contact() {
  const [country, setCountry] = useState<string>('')
  const [invalidCountry, setInvalidCountry] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [invalidName, setInvalidName] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false)

  const [phone, setPhone] = useState<string>('')
  const [invalidPhone, setInvalidPhone] = useState<boolean>(false)


  const [message, setMessage] = useState<string>('')
  const [formValid, setFormValid] = useState<boolean>()




  function handleFormValidation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (name.length < 3 || name.length > 32) {
      setInvalidName(true)
      setFormValid(false)

      return
    }
    if (phone.length < 10 || phone.length > 20) {
      setInvalidPhone(true)
      setFormValid(false)

      return
    }
    if (email.length < 10 || phone.length > 256) {
      setInvalidEmail(true)
      setFormValid(false)

      return
    }
    if (country === "") {
      setFormValid(false)
      setInvalidCountry(true)

      return
    }
    else {
      setInvalidName(false)
      setInvalidEmail(false)
      setInvalidPhone(false)
      setFormValid(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

    }


  }

  return (
    <Section id="contact">

      <h2>Contato</h2>


      <form onSubmit={(e) => handleFormValidation(e)} className="flex flex-col gap-4">

        {
          formValid ?
            <span className="text-cyan-500">Mensagem enviada com sucesso! </span> :
            <span className={invalidName || invalidEmail || invalidPhone ? "text-red-700" : "text-black"}>
              Por favor preencha todos os campos!</span>
        }

        <label htmlFor="name"> Nome <span className={invalidName ? "text-red-700" : "text-black"}>*</span>
          <Input id="name"
            required
            value={name}
            placeholder="Nome"
            title={"Nome invalido"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            icon={<AiOutlineUser />} />

          {invalidName ? <small className="text-red-700">{"nome invalido"}</small> : ""}
        </label>

        <label htmlFor="email"> Email<span className={invalidEmail ? "text-red-700" : "text-black"}>*</span>
          <Input
            required
            value={email}
            placeholder="Email"
            type="email"
            pattern={"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"}
            title={"E-mail invalido"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            icon={<AiOutlineMail />} />
          {invalidEmail ? <small className="text-red-700">{"email invalido"}</small> : ""}

        </label>

        <label htmlFor="phone">Telefone<span className={invalidPhone ? "text-red-700" : "text-black"}>*</span>
          <Input required
            id="phone"
            value={phone}
            placeholder="55 31 98765-3210"
            title={"telefone invalido"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            icon={<AiOutlinePhone />} />

          {invalidPhone ? <small className="text-red-700">{"telefone invalido"}</small> : ""}

        </label>

        <label htmlFor="message" className="flex flex-col"> Deixe sua mensagem:
          <textarea id="message" rows={4} placeholder={"sua mensagem"} value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-64 p-2 outline-0 border-2 border-black rounded focus:ring-cyan-500 focus:border-cyan-500">

          </textarea>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2 text-2xs'>
          <Checkbox id='remember' required />
          <span className={"text-black"}>
            Eu concordo com a Política de Privacidade.*</span>
        </label>

        <label htmlFor="country" className='flex items-center flex-col gap-2 text-xs'>
          <span className={invalidCountry ? "text-red-700" : "text-black"}>
            Selecione seu pais.*</span>

          <CountrySelector id="country" value={country}
            className={invalidCountry ? "border-red-700 border-2 rounded " : "border-black border-2 rounded focus:border-cyan-500"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)} />
        </label>


        <ReCAPTCHAForm />

        <Button>Enviar</Button>


      </form>
    </Section>
  )
}