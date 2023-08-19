export type UserInfoType = {
  name: string,
  email: string,
  password: string,
  passwordRepeat: string,
}

export type UserLoginType = {
  email: string,
  password: string,
}

export type UserRealType = {
  userId: string,
  userInfo: string,
}
