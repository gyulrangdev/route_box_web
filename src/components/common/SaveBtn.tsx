import React from 'react';
import styled from 'styled-components';

interface SaveBtnProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ isActive, text, onClick }) => {
  return (
    <Btn isActive={isActive} onClick={onClick} aria-disabled={!isActive}>
      {text}
    </Btn>
  );
};

const Btn = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2.5rem;
  background: ${({ isActive }) =>
    isActive ? 'var(--main-color, #21C8B6)' : 'var(--Gray6_disable-btn-bg, #f2f2f2)'};
  color: ${({ isActive }) =>
    isActive ? 'var(--White, #FFF)' : 'var(--Gray4_disable-text, #96979b)'};
  text-align: center;
  font-feature-settings: 'case' on;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

export default SaveBtn;
