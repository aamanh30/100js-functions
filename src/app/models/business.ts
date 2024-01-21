type Address = {
  number: number;
  zipCode: number;
  street: string;
};

export type Business = {
  address: Address;
  name: string;
};
