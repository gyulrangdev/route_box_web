import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';
import { genderType } from '@/api/my-page/types';
import { ProfileProvider, useProfile } from '@/contexts/profile';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  return (
    <ProfileProvider>
      <ProfileContent />
    </ProfileProvider>
  );
}

function ProfileContent() {
  const { hasChanges, handleSubmit } = useProfile();

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <ProfileComponents />
        <CustomBtn disabled={!hasChanges} text="저장하기" onClick={handleSubmit} />
      </FlexBox>
    </DefaultLayout>
  );
}
