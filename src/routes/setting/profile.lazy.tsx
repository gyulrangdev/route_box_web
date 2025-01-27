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

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

interface IProfile {
  profileImageUrl: string;
  nickname: string;
  birthDay: string;
  gender: genderType | '';
}

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [disabled, setDisabled] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });

  const profileValue: IProfile = {
    profileImageUrl: data?.profileImageUrl ?? '',
    nickname: data?.nickname ?? '',
    birthDay: data?.birthDay ?? '',
    gender: data?.gender ?? '',
  };

  console.log('profileValue :: ', profileValue);

  const [file, setFile] = useState<File | null>(null); // 파일 상태 추가

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    console.log('Updating state with:', { name, value });
    // 로컬 캐시 업데이트
    queryClient.setQueryData([queryKey.userProfile], (oldData: IProfile) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleActiveChange = (active: boolean) => {
    setDisabled(active);
  };

  const handleSubmit = () => {
    console.log(profileValue);
    // mutateAsync({
    //   nickname: profileValue.nickname,
    //   gender: profileValue.gender,
    //   birthDay: profileValue.birthDay,
    //   profileImage: file,
    // }).then(() => {
    //   navigate({ from: '/setting/profile', to: '/my-page' });
    // });
  };

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <ProfileComponents
          setFile={setFile}
          handleInputChange={handleInputChange}
          profileValue={profileValue}
        />
        <CustomBtn disabled={disabled} text="저장하기" onClick={handleSubmit} />
      </FlexBox>
    </DefaultLayout>
  );
}
