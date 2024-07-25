import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

jest.mock('../../../atoms/Button/Button.styled', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe('Hero Component', () => {
  const connectText = 'Conecta conmigo';
  const resumeText = 'Mis Trabajos';

  beforeEach(() => {
    render(<Hero connectText={connectText} resumeText={resumeText} />);
  });

  it('should render the Hero component', () => {
    expect(screen.getByAltText('Profile Image')).toBeInTheDocument();

    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toHaveTextContent('Soy Santiago Benito, desarrollador y diseñador gráfico.');

    expect(screen.getByText(/Mi día a día gira en torno a Java y React,/)).toBeInTheDocument();
  });

  it('should handle button clicks', () => {
    const connectButton = screen.getByText(connectText);
    const resumeButton = screen.getByText(resumeText);

    fireEvent.click(connectButton);
    fireEvent.click(resumeButton);
  });
});
