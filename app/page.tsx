import Card from "@/molecules/Card";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="grid dynamic-grid gap-4">
        <Card
          title="Evoke Alox"
          price="109.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/199227/560Wx490H/SAK_0-9415-D20_S1_RedDot.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Swiss-Army-Knives/Outdoor/Evoke-Alox/p/0.9415.D20"
        />

        <Card
          title="Coltello pane e pasticceria"
          price="31.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/31464/560Wx490H/CUT_6_8633_22__S1.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Coltelleria/Coltelli-da-pane/Coltello-da-pane-e-pasticcere-Swiss-Classic/p/6.8633.22G"
        />

        <Card
          title="Coltelli da tavola"
          price="35.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/31352/560Wx490H/CUT_6_7833_6__P1.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Coltelleria/Coltelli-per-verdure/Set-di-coltelli-da-tavola-e-da-pomodoro-Swiss-Classic-6-pezzi/p/6.7833.6"
        />

        <Card
          title="Ceppo Swiss Classic"
          price="229.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/145806/560Wx490H/CUT_6-7193-9_S2.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Coltelleria/Set-e-ceppi-di-coltelli/Ceppo-coltelli-Swiss-Classic-9-pezzi/p/6.7193.9"
        />

        <Card
          title="Ceppo Grand Maître"
          price="649.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/31888/560Wx490H/CUT_7_7243_6__S1.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Coltelleria/Set-e-ceppi-di-coltelli/Ceppo-di-coltelli-Grand-Ma%C3%AEtre-6-pezzi/p/7.7243.6"
        />

        <Card
          title="Affilacoltelli"
          price="27.00"
          imageUrl="https://imageengine.victorinox.com/mediahub/31957/560Wx490H/CUT_7_8715__S1.jpg"
          detailUrl="https://www.victorinox.com/ch/it/Prodotti/Coltelleria/Accessori/Affilacoltelli-%C2%ABVictorinox%C2%BB/p/7.8715"
        />
      </div>
    </main>
  );
}
