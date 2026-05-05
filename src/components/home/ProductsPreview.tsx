import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Droplets, Zap, Thermometer, Gauge } from "lucide-react";
import productImage from "@/assets/product-idra.png";

const blocks = [
  {
    title: "Tireuse à eau filtrée",
    features: [
      "Eau plate",
      "Filtration professionnelle (0,01 micron)",
      "Connexion directe au réseau",
      "Idéal pour service en carafes",
    ],
  },
  {
    title: "Machine de gazéification",
    features: [
      "Eau pétillante à la demande",
      "Gazéification stable et continue",
      "Fonctionnement indépendant",
      "Injection automatique de CO2",
    ],
  },
];

const specs = [
  { icon: Gauge, label: "Capacité", value: "240L/heure" },
  { icon: Droplets, label: "Dimensions", value: "30 x 40 x 45 cm" },
  { icon: Zap, label: "Puissance", value: "220V" },
  { icon: Thermometer, label: "CO2", value: "Cylindre 2kg" },
];

export function ProductsPreview() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
            Notre Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            L'Élégance et <span className="text-gradient-ocean">l'Efficacité</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une source unique d'eau premium, plate ou pétillante, directement connectée à votre réseau.
            Une seule machine élégante pour servir vos clients en carafes.
          </p>
        </div>

        {/* Product */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div>
            <div className="relative bg-gradient-to-br from-muted to-background rounded-3xl p-8 lg:p-12">
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                Solution tout-en-un
              </span>
              <img src={productImage} alt="Tireuse Idra" className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-medium">Tireuse à eau filtrée & pétillante</span>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Idra</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Une source unique d'eau premium, plate ou pétillante, directement connectée à votre réseau.
            </p>

            {/* Two function blocks */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {blocks.map((block) => (
                <div key={block.title} className="p-5 rounded-2xl border border-border bg-card">
                  <h4 className="font-display text-lg font-bold text-foreground mb-3">{block.title}</h4>
                  <ul className="space-y-2">
                    {block.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-card rounded-2xl mb-8 border border-border">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  En Savoir Plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
