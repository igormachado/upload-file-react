import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
} from 'react'

interface TypesFiles {
  arrayFiles: string[]
  setArrayFiles: Dispatch<SetStateAction<string[]>>
}

interface childrenTypeFiles {
  children: ReactNode
}

export const FilesContext = createContext({} as TypesFiles)

export function AddFilesProvider({ children }: childrenTypeFiles) {
  const [arrayFiles, setArrayFiles] = useState<string[]>([])

  return (
    <FilesContext.Provider value={{ arrayFiles, setArrayFiles }}>
      {children}
    </FilesContext.Provider>
  )
}
