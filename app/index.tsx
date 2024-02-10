import { useBearStore } from "@/stores/bears";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { verifyInvoice } from "@/services/efiskalizimi";

const IndexPage: React.FC = () => {
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increaseBears);

  useEffect(() => {
    verifyInvoice(
      "48294F85B7937A48B2FE89B39026987D",
      "2023-11-21T15:51:30 01:00",
      "L02225003J"
    ).then((data) => console.log(data));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bears: {bears}</Text>
      <Button title="Increase bears" onPress={increaseBears} />
    </View>
  );
};

export default IndexPage;
