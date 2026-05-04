import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Droplets, Zap, Thermometer, Gauge } from "lucide-react";
import productImage from "@/assets/product-idra.png";

const product = {
  id: "idra",
  name: "Idra",
  tagline: "Tireuse à eau filtrée & pétillante",
  headline: "Notre Solution : L'Élégance et l'Efficacité",
  description:
    "Une source unique d'eau premium, plate ou pétillante, directement connectée à votre réseau. Une seule machine élégante pour servir vos clients en carafes, sans logistique de bouteilles.",
  image: productImage,
  badge: "Solution tout-en-un",
  price: "À partir de 57 CHF/mois",
  blocks: [
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
  ],
  specs: {
    capacity: "240L/heure",
    dimensions: "50 x 25 x 45 cm",
    power: "220V",
    co2: "Cylindre 2kg (inclus)",
  },
};

const specIcons: { [key: string]: React.ElementType } = {
  capacity: Gauge,
  dimensions: Droplets,
  power: Zap,
  co2: Thermometer,
};

const specLabels: { [key: string]: string } = {
  capacity: "Capacité",
  dimensions: "Dimensions",
  power: "Puissance",
  co2: "CO2",
};

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Notre Produit
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {product.headline.split(":")[0]}: <span className="text-gradient-ocean">{product.headline.split(":")[1]?.trim()}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div>
              <div className="relative bg-gradient-to-br from-muted to-background rounded-3xl p-8 lg:p-12">
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto rounded-2xl" />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-secondary font-medium">{product.tagline}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

              {/* Two function blocks */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {product.blocks.map((block) => (
                  <div key={block.title} className="p-5 rounded-2xl border border-border bg-card">
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">{block.title}</h3>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-muted rounded-2xl mb-8">
                {Object.entries(product.specs).map(([key, value]) => {
                  const Icon = specIcons[key] || Droplets;
                  return (
                    <div key={key} className="text-center">
                      <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground">{specLabels[key]}</div>
                    </div>
                  );
                })}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">À partir de</span>
                  <div className="text-3xl font-display font-bold text-primary">{product.price}</div>
                </div>
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Demander un Devis
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Une question sur notre solution ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour intégrer Idra dans votre établissement, en fonction de votre volume et de vos besoins spécifiques.
          </p>
          <Link to="/contact">
            <Button variant="ocean" size="xl">
              Consultation Gratuite
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
