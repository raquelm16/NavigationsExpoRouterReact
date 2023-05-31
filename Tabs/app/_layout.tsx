import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
      //nome que aparece no app
        name="Home"
        options={{
            //nome do arquivo
          href: '/',
        }}
      />

     <Tabs.Screen
        name="Tela A"
        options={{
          href: '/telaA',
        }}
      />

<Tabs.Screen
        name="telaB"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}