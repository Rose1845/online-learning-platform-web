export type Role = {
  id: number;
  name: string;
  description: string;
  isDefault: boolean;
};

export type Authority = {
  authority: string;
};

export type User = {
  id: number;
  fullName: string; // User's full name
  email: string; // User's email address
  password: string; // User's password
  acceptTerms: boolean; // Acceptance of terms
  isAccountNonExpired: boolean; // Account expiration status
  isAccountNonLocked: boolean; // Account lock status
  isCredentialsNonExpired: boolean; // Credentials expiration status
  isActive: boolean;
  roles: Role[];
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
};
export type authReponse = {
  accessToken: string;
  refreshToken: string
};

export type LoginResponse = {
  auth: authReponse;
  user: User;
};
