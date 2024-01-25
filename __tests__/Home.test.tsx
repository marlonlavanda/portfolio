import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('should have Hello text', () => {
  render(<Home />) // Arrange

  const hello = screen.getByText(/Hello/i) // Act

  expect(hello).toBeInTheDocument() // Assert
})