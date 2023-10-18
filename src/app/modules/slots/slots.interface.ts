export type ICreateSlotReq = {
  slotTime: string;
};
export type ICreateSlotResponse = {
  slotId: string;
  slotTime: string
  createdAt: Date;
};

export type IUpdateSlotRequest = {
  slotTime?: string;
};
