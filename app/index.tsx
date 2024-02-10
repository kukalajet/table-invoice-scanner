import { useEffect } from "react";
import { Text, View } from "react-native";
import { useInvoiceStore } from "@/stores/invoice";

const IndexPage: React.FC = () => {
  const invoice = useInvoiceStore((state) => state.invoice);
  const error = useInvoiceStore((state) => state.error);
  const getInvoice = useInvoiceStore((state) => state.getInvoice);

  useEffect(() => {
    getInvoice(
      "48294F85B7937A48B2FE89B39026987D",
      "2023-11-21T15:51:30 01:00",
      "L02225003J"
    );
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ flex: 1, maxHeight: 320 }}>
        Invoice: {JSON.stringify(invoice)}
      </Text>
      <Text style={{ flex: 1, maxHeight: 320 }}>
        Error: {JSON.stringify(error)}
      </Text>
    </View>
  );
};

export default IndexPage;
