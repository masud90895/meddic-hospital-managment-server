import { z } from 'zod';
// import { isValidISOString } from '../../../shared/utils';

const createSlot = z.object({
  body: z.object({
    slotTime: z.string({
      required_error: 'slotTime is required',
      invalid_type_error: 'Slot Time must be in string',
    }),
  }),
});

export const SlotValidation = {
  createSlot,
};
