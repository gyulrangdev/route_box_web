import React from 'react';
import styled from 'styled-components';

interface TooltipProps {
  text: string; // 툴팁에 표시할 텍스트
  position?: 'top' | 'bottom' | 'left' | 'right'; // 툴팁 위치
  children: React.ReactNode; // 툴팁이 감쌀 요소
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipBubble = styled.div<{ position: string }>`
  position: absolute;
  ${(props) =>
    props.position === 'top' &&
    `
    bottom: 150%;
    left: 90%;
    transform: translateX(-90%);
    `}
  ${(props) =>
    props.position === 'bottom' &&
    `
      top: 150%;
      left: 10%;
      transform: translateX(-10%);
  `}
  ${(props) =>
    props.position === 'left' &&
    `
      right: 150%;
      top: 50%;
      transform: translateY(-50%);
  `}
  ${(props) =>
    props.position === 'right' &&
    `
      left: 150%;
      top: 50%;
      transform: translateY(-50%);
  `}
  background-color: var(--Sub-black);
  color: #fff;
  padding: 12px 10px;
  border-radius: 8px;
  white-space: pre-line; /* 줄바꿈 가능 */
  font-size: 14px;
  min-width: 168px; /* TODO 사이즈 검토 */
  min-height: 57px;
  max-width: 331px;
  max-height: 118px;
  z-index: 100;
  display: none; /* 기본적으로 숨김 */
  pointer-events: none;
  justify-content: center;
  align-items: center;
  text-align: start;
  line-height: 20px;

  /* 말풍선 삼각형 추가 */
  &::after {
    content: '';
    position: absolute;
    ${(props) =>
      props.position === 'top' &&
      `
      bottom: -6px;
      left: 90%;
      transform: translateX(-90%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid var(--Sub-black);
    `}
    ${(props) =>
      props.position === 'bottom' &&
      `
      top: -6px;
      left: 10%;
      transform: translateX(-10%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--Sub-black);
    `}
    ${(props) =>
      props.position === 'left' &&
      `
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid var(--Sub-black);
    `}
    ${(props) =>
      props.position === 'right' &&
      `
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid var(--Sub-black);
    `}
  }
`;

const TooltipWrapper = styled.div`
  &:hover ${TooltipBubble} {
    display: flex; /* 호버 시 보이게 설정 */
  }
`;

const Tooltip: React.FC<TooltipProps> = ({ text, position = 'top', children }) => {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipBubble position={position}>{text}</TooltipBubble>
      </TooltipWrapper>
    </TooltipContainer>
  );
};

export default Tooltip;
