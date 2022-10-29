import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';

export function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <Header />
    </div>
  )
}


