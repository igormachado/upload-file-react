import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: '#F3F0FF',
  width: 440,
  height: 160,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  position: 'relative',
  marginBottom: 10,
})

export const ImgCloud = styled('p', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
  color: '#7C3AED',
  cursor: 'pointer',
})

export const FirstP = styled('p', {
  display: 'flex',
  color: '#7A5FEC',
  fontWeight: 'bold',
  fontSize: 16,
  fontFamily: 'sans-serif',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
})

export const SecondP = styled('p', {
  display: 'flex',
  color: '#746E82',
  fontWeight: 'regular',
  fontSize: 16,
  fontFamily: 'sans-serif',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 5,
})
