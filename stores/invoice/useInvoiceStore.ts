import { create } from "zustand";
import { verifyInvoice } from "@/services/efiskalizimi";

type Store = {
  invoice: any | null;
  error: any | null;
  getInvoice: (iic: string, dateTimeCreated: string, tin: string) => void;
};

const useInvoiceStore = create<Store>((set) => ({
  invoice: null,
  error: null,
  getInvoice: async (iic, dateTimeCreated, tin) => {
    try {
      const invoice = await verifyInvoice(iic, dateTimeCreated, tin);
      set({ invoice });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export { useInvoiceStore };
