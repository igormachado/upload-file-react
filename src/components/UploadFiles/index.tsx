import { CloudArrowUp } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import Dropzone from 'react-dropzone'
import { FilesContext } from '../contexts/useContextFiles'
import {
  Container,
  FirstP,
  ImgCloud,
  SecondP,
} from '@/styles/pages/UploadFiles'

export function UploadFiles() {
  const { arrayFiles, setArrayFiles } = useContext(FilesContext)

  console.log(arrayFiles)
  return (
    <Dropzone
      onDrop={(acceptedFiles) =>
        acceptedFiles.map((file) =>
          setArrayFiles([...arrayFiles, `${file.name}`]),
        )
      }
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Container>
              <div>
                <ImgCloud>
                  <CloudArrowUp size={50} />
                </ImgCloud>
                <FirstP>Importe seus arquivos</FirstP>
                <SecondP>Arraste ou clique para fazer upload</SecondP>
              </div>
            </Container>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
