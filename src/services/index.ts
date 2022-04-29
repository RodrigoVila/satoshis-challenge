import axios from "axios";

const USERS_TO_FETCH = 100;
const BASE_URL = `https://randomuser.me/api/?results=${USERS_TO_FETCH}`;

export const fetchUsers = async (): Promise<TUser[]> => {
  const { data } = await axios.get(BASE_URL);
  return data.results;
};

export const fetchUsersByNat = async (nats: string) => {
  const { data } = await axios.get(`${BASE_URL}&nat=${nats}`);
  return data.results;
};
