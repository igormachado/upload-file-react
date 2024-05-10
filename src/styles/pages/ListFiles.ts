import { styled } from '@stitches/react'

export const ContainerFile = styled('div', {
  display: 'flex',
  borderRadius: 8,
  gap: 12,
  padding: 8,

  Image: {
    backgroundColor: '#E9E3F8',
    color: '#AC96E4',
    height: 50,
    width: 50,
  },
})

export const FileName = styled('span', {
  display: 'flex',
  fontWeight: 'bold',
  fontSize: 16,
  alignItems: 'flex-start',
  marginRight: 'auto',
  marginBottom: 15,
  marginTop: 5,
})

export const ButtonRemoveFile = styled('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  cursor: 'pointer',
  marginBottom: 10,
  backgroundColor: '#EBEDED',
})
