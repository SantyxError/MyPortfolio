import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skill from '../Skill';

describe('Skill Component', () => {
  test('renders with correct image and text', () => {
    const imageSrc = 'https://example.com/image.png';
    const altText = 'Skill Image';
    const text = 'Skill Name';
    
    render(<Skill imageSrc={imageSrc} altText={altText} text={text} />);
    
    // Verifica que la imagen se renderiza con el src y el alt correctos
    const skillImage = screen.getByTestId('skill-image') as HTMLImageElement;
    expect(skillImage).toBeInTheDocument();
    expect(skillImage.src).toBe(imageSrc);
    
    // Verifica que el texto se renderiza correctamente
    const skillText = screen.getByTestId('skill-text');
    expect(skillText).toBeInTheDocument();
    expect(skillText.textContent).toBe(text);
  });

  test('renders with correct styles', () => {
    const imageSrc = 'https://example.com/image.png';
    const altText = 'Skill Image';
    const text = 'Skill Name';
    
    const { getByTestId } = render(<Skill imageSrc={imageSrc} altText={altText} text={text} />);
    
    // Verifica los estilos aplicados al SkillWrapper
    const skillWrapper = getByTestId('skill-wrapper');
    expect(skillWrapper).toHaveStyle(`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `);
    
    // Verifica los estilos aplicados al SkillImageContainer
    const skillImageContainer = getByTestId('skill-image-container');
    expect(skillImageContainer).toHaveStyle(`
      width: 70px;
      height: 70px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      border: 5px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
    `);
    
    // Verifica los estilos aplicados al SkillImage
    const skillImage = getByTestId('skill-image');
    expect(skillImage).toHaveStyle(`
      width: 50px;
      height: 50px;
    `);
    
    // Verifica los estilos aplicados al SkillText
    const skillText = getByTestId('skill-text');
    expect(skillText).toHaveStyle(`
      margin: 0;
      width: 80px;
    `);
  });
});
