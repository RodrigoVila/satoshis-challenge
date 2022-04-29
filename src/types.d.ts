interface IName {
  title: string;
  first: string;
  last: string;
}

interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface IDOB {
  date: string;
  age: number;
}

interface IRegistered {
  date: string;
  age: number;
}

interface IUserID {
  name: string;
  value: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

type TUser = {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDOB;
  registered: IRegistered;
  phone: string;
  cell: string;
  id: IUserID;
  picture: IPicture;
  nat: string;
};

interface INats {
  symbol: string;
  name: string;
}
