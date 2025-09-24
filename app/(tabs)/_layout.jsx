import { Tabs } from "expo-router";
import Icon from "../../src/components/Icon";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome6" size={23} name="house" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
