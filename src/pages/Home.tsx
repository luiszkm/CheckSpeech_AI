import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function Home() {
  const { t } = useTranslation()

  return (
    <section className='min-h-screen w-full max-w-screen-xl py-20 my-0 mx-auto'>
      <main className='flex flex-col items-center '>
        <span className='text-xl font-bold'>CheckSpeech Ia</span>

        <div className='flex flex-col items-center px-4'>
          <h1 className='text-3xl'>{t("HomeTitle")} <span className='text-cyan-500 font-bold'>{t('WebSite')}</span></h1>
          <p className='text-justify'>{t('Description')}</p>
        </div>
      </main>
      <Button>sadasd</Button>
    </section>
  )
}


