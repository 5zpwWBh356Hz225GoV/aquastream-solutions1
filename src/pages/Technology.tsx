import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, ShieldCheck, Gauge, Leaf } from "lucide-react";
import filtrationInfographic from "@/assets/filtration-infographic.png";
const certifications = [
  {
    name: "RoHS",
    description: "Conforme à la restriction des substances dangereuses",
    icon: ShieldCheck,
  },
  {
    name: "ISO",
    description: "Système de management de la qualité certifié",
    icon: Gauge,
  },
  {
    name: "NSF / NSF/ANSI 42 53",
    description: "Normes pour unités de traitement d'eau potable",
    icon: Droplets,
  },
  {
    name: "Marquage CE",
    description: "Conforme aux exigences européennes de santé, sécurité et environnement",
    icon: Leaf,
  },
];
const Technology = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Notre Technologie
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Système de Filtration <span className="text-gradient-ocean">Professionnel</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Une ultra-filtration à 0,01 micron qui élimine les impuretés tout en préservant les minéraux
              naturels essentiels au goût et à la santé. Découvrez l'excellence technique derrière chaque système Idra.
            </p>
          </div>
        </div>
      </section>

      {/* Filtration Process */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border shadow-elevated bg-card">
            <img
              src={filtrationInfographic}
              alt="Système de filtration professionnel Idra Systems : charbon actif et membrane à fibres creuses 0,01 micron"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Smart Features */}

      {/* Certifications */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
              Qualité Garantie
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Certifications & Normes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque système Idra respecte ou dépasse les normes internationales de traitement de l'eau, de sécurité et
              de management de la qualité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Découvrez la Différence Technologique
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Planifiez une démonstration et voyez notre technologie de filtration en action.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Réserver une Démo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
export default Technology;
