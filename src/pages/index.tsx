import { AddFilesProvider } from '@/components/contexts/useContextFiles'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <>
      <AddFilesProvider>
        <Main />
      </AddFilesProvider>
    </>
  )
}
