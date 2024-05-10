import { useContext, useState } from 'react'
import { FilesContext } from '../contexts/useContextFiles'
import {
  ButtonRemoveFile,
  ContainerFile,
  FileName,
} from '@/styles/pages/ListFiles'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

import FileImg from '../../assets/FileImg.svg'
import Image from 'next/image'

interface FileProps {
  file: string
  key: string
}

export function ListFiles() {
  const { arrayFiles } = useContext(FilesContext)

  return arrayFiles.map((file) => {
    return <AddFiles key={file} file={file} />
  })
}

function AddFiles({ file, key }: FileProps) {
  const { arrayFiles, setArrayFiles } = useContext(FilesContext)
  const [progress, setProgress] = useState(0)

  function progressBar() {
    if (progress < 100) {
      setProgress((state) => state + 10)
    }

    return progress
  }

  const removeElement = (file: string) => {
    const removeFile = arrayFiles.filter((i) => i !== file)
    setArrayFiles(removeFile)
  }

  console.log(progress)

  return (
    <ButtonRemoveFile onClick={() => removeElement(file)}>
      <ContainerFile key={key}>
        <Image src={FileImg} width={50} height={50} alt="File image" />
        <p>
          <FileName>{file}</FileName>
          <Box sx={{ width: '364px' }}>
            <LinearProgress
              sx={{
                height: '10px',
                borderRadius: '2px',
                marginTop: '8px',
              }}
              variant="determinate"
              value={progressBar()}
            />
          </Box>
        </p>
      </ContainerFile>
    </ButtonRemoveFile>
  )
}
