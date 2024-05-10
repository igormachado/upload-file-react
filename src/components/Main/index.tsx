import { Container } from '../../styles/pages/Main'
import { ListFiles } from '../ListFiles'
import { UploadFiles } from '../UploadFiles'

export function Main() {
  return (
    <Container>
      <UploadFiles />
      <ListFiles />
    </Container>
  )
}
