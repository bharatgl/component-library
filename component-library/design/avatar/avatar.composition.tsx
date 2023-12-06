import React from 'react';
import { ThemeProvider } from '@bharatgl/component-library.base-ui.theme-provider';
import { DefaultAvatar, OrgAvatar, UserAvatar } from './index';

const accounts = {
  defAccount: {
    name: 'defaultAccount',
    type: 'default',
    profileImage: 'https://static.bit.dev/harmony/support.svg',
  },
  orgAccount: {
    name: 'defaultAccount',
    type: 'organization',
    profileImage: 'https://static.bit.dev/bit-logo.svg',
  },
  userAccount: {
    displayName: 'display name',
    name: 'defaultAccount',
    type: 'user',
    profileImage: 'https://static.bit.dev/harmony/github.svg',
  },
  noPicOrgAccount: { name: 'defaultAccount', type: 'organization' },
  noPicUserAccount: { name: 'defaultAccount', type: 'user' },
  noNameAccount: { name: '', type: 'user' },
};

export const DefaultAvatarExample = () => (
  <div data-testid="default">
    <ThemeProvider>
      <DefaultAvatar size={32} account={accounts.defAccount} />
    </ThemeProvider>
  </div>
);

export const OrganizationAvatarExample = () => (
  <div data-testid="org">
    <ThemeProvider>
      <OrgAvatar size={32} account={accounts.orgAccount} />
    </ThemeProvider>
  </div>
);

export const UserAvatarExample = () => (
  <div data-testid="user">
    <ThemeProvider>
      <UserAvatar size={32} account={accounts.userAccount} />
    </ThemeProvider>
  </div>
);

export const LargeAvatarExample = () => (
  <div data-testid="large">
    <ThemeProvider>
      <OrgAvatar size={100} account={accounts.orgAccount} />
    </ThemeProvider>
  </div>
);

export const NoSetIconOrgAvatar = () => (
  <div data-testid="org-no-set-icon">
    <ThemeProvider>
      <OrgAvatar size={32} account={accounts.noPicOrgAccount} />
    </ThemeProvider>
  </div>
);

export const NoSetIconUserAvatar = () => (
  <div data-testid="user-no-set-icon">
    <ThemeProvider>
      <UserAvatar size={32} account={accounts.noPicUserAccount} />
    </ThemeProvider>
  </div>
);

export const NoUserNameAvatarExample = () => (
  <div data-testid="no-user-name">
    <ThemeProvider>
      <UserAvatar size={32} account={accounts.noNameAccount} />
    </ThemeProvider>
  </div>
);

export const UserAvatarWithTooltipExample = () => (
  <div data-testid="with-tooltup">
    <ThemeProvider>
      <UserAvatar size={32} account={accounts.userAccount} showTooltip />
    </ThemeProvider>
  </div>
);
