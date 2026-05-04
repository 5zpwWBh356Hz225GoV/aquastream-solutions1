import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import productImage from "@/assets/product-idra.png";

const blocks = [
  {
    title: "Tireuse à eau filtrée",
    features: [
      "Eau plate",
      "Filtration professionnelle",
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
    ],
  },
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
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-elevated">
          {/* Image */}
          <div className="relative h-full min-h-[400px] bg-gradient-to-br from-muted to-background flex items-center justify-center p-8">
            <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              Solution tout-en-un
            </span>
            <img
              src={productImage}
              alt="Tireuse Idra"
              className="w-full max-w-sm rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <span className="text-secondary text-sm font-medium">Tireuse à eau filtrée & pétillante</span>
            <h3 className="font-display text-3xl font-bold text-foreground mt-1 mb-6">Idra</h3>

            <div className="space-y-6 mb-8">
              {blocks.map((block) => (
                <div key={block.title}>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">{block.title}</h4>
                  <ul className="space-y-1.5">
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

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/products">
                <Button variant="ocean" size="lg" className="w-full sm:w-auto">
                  Découvrir Idra
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
