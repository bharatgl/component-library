import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { AccountObj } from './avatar';
import { addAvatarQueryParams } from './add-avatar-query-params';
import { styles } from './styles.module.scss';

type Props = {
  account: AccountObj;
  size: number;
  imageSize?: number;
  fontSize?: number;
  className?: string;
  imgClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export class OrgAvatar extends PureComponent<Props> {
  render() {
    const {
      account,
      size,
      imageSize = size,
      fontSize = size * 0.35,
      className,
      imgClassName,
      ...rest
    } = this.props;

    const { profileImage = '' } = account;
    const profileImageWithParams = addAvatarQueryParams(
      profileImage,
      imageSize,
      styles.defaultAvatarBgColor
    );

    return (
      <div
        className={classNames(styles.default, styles.avatar, className)}
        style={{ width: `${size}px`, height: `${size}px` }}
        {...rest}
      >
        {profileImageWithParams && (
          <img
            src={profileImageWithParams}
            className={classNames(styles.avatarImg, imgClassName)}
          />
        )}
        <span className={styles.defaultAvatar}>
          <i
            className="bitcon-org"
            style={{ fontSize: `${fontSize}px`, lineHeight: `${size}px` }}
          />
        </span>
      </div>
    );
  }
}
