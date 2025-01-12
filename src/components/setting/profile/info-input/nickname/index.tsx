import React from 'react';
import { NicknameCharCount, NicknameContainer, NicknameInput } from './style';
import { InputLabel, InputSection } from '../style';

interface NicknameProps {
  nickname: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Nickname: React.FC<NicknameProps> = ({ nickname, handleInputChange }) => {
  return (
    <InputSection>
      <InputLabel>닉네임</InputLabel>
      <NicknameContainer>
        <NicknameInput
          placeholder="닉네임을 입력해주세요"
          name="nickname"
          value={nickname}
          onChange={(e) => handleInputChange(e.currentTarget.name, e.currentTarget.value)}
          maxLength={8}
        />
        <NicknameCharCount>({nickname.length}/8)</NicknameCharCount>
      </NicknameContainer>
    </InputSection>
  );
};
