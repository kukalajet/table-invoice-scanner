import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const IndexPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const url =
      "https://efiskalizimi-app.tatime.gov.al/invoice-check/api/verifyInvoice";
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Origin: "https://efiskalizimi-app.tatime.gov.al",
      Referer: "https://efiskalizimi-app.tatime.gov.al/invoice-check/",
    };
    const body =
      "iic=48294F85B7937A48B2FE89B39026987D&dateTimeCreated=2023-11-21T15:51:30%2001:00&tin=L02225003J";

    fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    })
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data);
        setData(JSON.stringify(data));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{data}</Text>
    </View>
  );
};

export default IndexPage;
