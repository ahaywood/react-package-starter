import React from 'react';
import { Icon } from '../Icon';
import { Indicator } from '../Indicator';

export interface AvatarProps {
  alt?: string;
  icon?: string;
  image?: string;
  initials?: string;
  initialsSize?: 'small' | 'medium';
  shape?: 'circle' | 'square';
  showBorder?: boolean;
  showIndicator?: boolean;
  size?: number;
}

const Avatar = ({
  alt = '',
  icon = '',
  initials = '',
  initialsSize = 'medium',
  image = '',
  shape = 'circle',
  showIndicator = false,
  size = 48,
  showBorder = false,
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={`flex items-center justify-center text-white bg-primary relative
        ${shape === 'circle' ? 'rounded-full' : ''}
        ${shape === 'square' ? 'rounded-[4px]' : ''}
        ${
          showBorder
            ? 'border-white border-[2px] shadow-[0px_0px_1px_rgba(48,49,51,0.05),_0px_1px_1px_rgba(48,49,51,0.1)]'
            : ''
        }
      `}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {image && (
        <img
          src={image}
          alt={alt}
          className={`w-full h-full object-cover
          ${shape === 'circle' ? 'rounded-full' : ''}
          ${shape === 'square' ? 'rounded-[4px]' : ''}
        `}
        />
      )}
      {icon && <Icon name={icon} />}
      {initials && (
        <span
          className={`${initialsSize === 'small' && 'text-sm'} ${
            initialsSize === 'medium' && 'text-base'
          }`}
        >
          {initials}
        </span>
      )}
      {showIndicator && (
        <div className="absolute -top-[1px] -right-[2px]">
          <Indicator />
        </div>
      )}
    </div>
  );
};

export { Avatar };
