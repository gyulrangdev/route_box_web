import React from 'react';
import NotificationListItem from './NotificationListItem';
import { Container } from './style';

const NotificationList: React.FC = () => {
  const notifications = [
    { name: '마케팅 정보 알림' },
    {
      name: '여행 도중 사진 알림',
      info: true,
      tooltipText:
        '여행 도중,\n특정 위치에서 일정 시간 이상\n시간 머물때, 놓치지 않고 기록\n할 수 있게 알림을 줍니다.',
    },
  ];
  return (
    <Container>
      {notifications.map((notification, index) => (
        <NotificationListItem
          key={index}
          notification={notification.name}
          info={notification.info}
          tooltipText={notification.tooltipText}
        />
      ))}
    </Container>
  );
};

export default NotificationList;
