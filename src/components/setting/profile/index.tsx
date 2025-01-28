import FlexBox from '@/components/common/flex-box';
import { ProfileImg } from './profile-img';
import { ProfileInfo } from './info-input';

export const ProfileComponents = () => {
  return (
    <FlexBox col gap={2.75}>
      <ProfileImg />
      <ProfileInfo />
    </FlexBox>
  );
};
