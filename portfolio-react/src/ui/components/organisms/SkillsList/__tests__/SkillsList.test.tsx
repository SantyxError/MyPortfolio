import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsList from '../SkillsList'; // Asegúrate de que la ruta sea correcta

describe('SkillsList Component', () => {
  test('renders the SkillsList component with correct subtitle and skills', () => {
    render(<SkillsList />);
    
    // Verifica que el componente Subtitle se renderiza con el texto correcto
    const subtitleElement = screen.getByText('Mis Skills');
    expect(subtitleElement).toBeInTheDocument();
    
    // Verifica que todos los componentes Skill están presentes con sus textos alternativos
    const skillImages = [
      { alt: 'HTML' },
      { alt: 'CSS' },
      { alt: 'JavaScript' },
      { alt: 'TypeScript' },
      { alt: 'Angular' },
      { alt: 'React' },
      { alt: 'Node.js' },
      { alt: 'Sass' },
      { alt: 'Java' },
      { alt: 'Bootstrap' },
      { alt: 'Tailwind' },
      { alt: 'MySql' },
      { alt: 'Docker' },
      { alt: 'Git' },
      { alt: 'Paquete Adobe' },
      { alt: 'Figma' }
    ];
    
    skillImages.forEach(({ alt }) => {
      // Utiliza queryAllByAltText en lugar de getByAltText
      const skillImages = screen.queryAllByAltText(alt);
      expect(skillImages.length).toBeGreaterThan(0); // Verifica que al menos un elemento con el alt text esté presente
      skillImages.forEach(image => {
        expect(image).toBeInTheDocument();
      });
    });
  });

  test('renders the SkillsList component with correct styles', () => {
    const { container } = render(<SkillsList />);
    
    // Verifica los estilos aplicados al SkillsListContainer
    const skillsListContainer = container.querySelector('[data-testid="skills-list-container"]');
    expect(skillsListContainer).not.toBeNull(); // Verifica que el elemento existe
    if (skillsListContainer) {
      expect(skillsListContainer).toHaveStyle(`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      `);
    }

    // Verifica los estilos aplicados al SkillsListWrapper
    const skillsListWrapper = container.querySelector('[data-testid="skills-list-wrapper"]');
    expect(skillsListWrapper).not.toBeNull(); // Verifica que el elemento existe
    if (skillsListWrapper) {
      expect(skillsListWrapper).toHaveStyle(`
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 25px;
        max-width: 1200px;
      `);
    }
  });
});
