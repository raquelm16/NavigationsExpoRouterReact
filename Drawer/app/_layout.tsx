//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="telaA" 
        options={{
          drawerLabel: "User",
          title: "overview",
        }}
      />
    </Drawer>
  );
}