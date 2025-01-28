import { GenderContainer, GenderSelect, GenderType } from './style';
import { InputLabel } from '../style';
import { useProfile } from '@/contexts/profile';

export const Gender = () => {
  const { currentValues, updateField } = useProfile();

  return (
    <GenderContainer>
      <InputLabel>성별</InputLabel>
      <GenderType>
        <GenderSelect
          value="MALE"
          $isSelected={currentValues.gender === 'MALE'}
          onClick={() => updateField('gender', 'MALE')}
        >
          남성
        </GenderSelect>
        <GenderSelect
          value="FEMALE"
          $isSelected={currentValues.gender === 'FEMALE'}
          onClick={() => updateField('gender', 'FEMALE')}
        >
          여성
        </GenderSelect>
        <GenderSelect
          value="PRIVATE"
          $isSelected={currentValues.gender === 'PRIVATE'}
          onClick={() => updateField('gender', 'PRIVATE')}
        >
          비공개
        </GenderSelect>
      </GenderType>
    </GenderContainer>
  );
};
