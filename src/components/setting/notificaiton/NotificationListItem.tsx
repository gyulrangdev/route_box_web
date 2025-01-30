import React, { useState } from 'react';
import ToggleButton from './SlidingToggleButton';
import Info from '../../../assets/svg/info.svg';
import { Item } from './style';
import Tooltip from '@/components/common/Tooltip';

interface NotificationListItemProps {
  notification: string;
  info?: boolean;
  tooltipText?: string; // 툴팁에 표시할 텍스트
}

const NotificationListItem: React.FC<NotificationListItemProps> = ({
  notification,
  info,
  tooltipText,
}) => {
  return (
    <Item>
      <span className="body-r-m">
        {notification}
        {info && tooltipText && (
          <button style={{ position: 'relative' }}>
            <Tooltip text={tooltipText} position="bottom">
              <img src={Info} alt="Info" />
            </Tooltip>
          </button>
        )}
      </span>
      <ToggleButton />
    </Item>
  );
};

export default NotificationListItem;
