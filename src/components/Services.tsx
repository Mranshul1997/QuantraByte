import {
  Code2,
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "E-commerce & Marketplace Platforms",
        "Custom Content Management Systems (CMS)",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description:
        "Intelligent systems that learn, adapt, and provide valuable insights for your business.",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (Chatbots, Text Analysis)",
        "Computer Vision & Image Recognition",
        "Recommendation Engines & Personalization",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Scalable cloud infrastructure and seamless integration with leading cloud platforms.",
      features: [
        "AWS / Azure / GCP Deployment & Migration",
        "Serverless Architecture & Functions",
        "Microservices Design & API Integration",
        "Cloud Monitoring & Cost Optimization",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android Native Development",
        "React Native & Flutter Cross-Platform Apps",
        "Mobile UI/UX Design & Prototyping",
        "App Store & Play Store Deployment & Optimization",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Database,
      title: "IT Outsourcing & Staff Augmentation",
      description:
        "Flexible engagement models to extend your team and accelerate project delivery.",
      features: [
        "Dedicated Development Teams",
        "Project-Based End-to-End Development",
        "Remote IT Support & Maintenance",
        "Specialized Talent Hiring (Developers, Designers, QA)",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and user data.",
      features: [
        "Security Audits & Risk Assessments",
        "Penetration Testing & Vulnerability Scanning",
        "Compliance & Data Privacy (GDPR, HIPAA, ISO)",
        "Real-Time Threat Detection & Incident Response",
      ],
      color: "from-red-500 to-red-600",
    },
  ];
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive technology solutions tailored to your business
              needs. From concept to deployment, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:shadow-quantum scale-on-hover fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 quantum-gradient rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 quantum-gradient rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1 w-full bg-gradient-to-r quantum-gradient rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <div
              className="bg-card rounded-2xl p-8 md:p-12 shadow-quantum fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business.
                Our team of experts is ready to bring your vision to life.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center px-8 py-4 quantum-gradient hover:quantum-gradient-hover text-white font-semibold rounded-lg shadow-quantum glow-on-hover transition-all duration-300"
              >
                Start Your Project
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
