import { Code2, Brain, Cloud, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge algorithms that learn and adapt to your business needs.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud solutions for scalability and performance.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform apps that engage your users.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              About <span className="text-gradient">QuantraByte</span>
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We're a forward-thinking technology startup dedicated to bridging
              the gap between quantum-level innovation and practical, byte-sized
              implementations. Our mission is to transform complex ideas into
              elegant solutions that drive real business value.
            </p>
          </div>

          {/* Vision Statement */}
          <div
            className="bg-card rounded-2xl p-8 md:p-12 shadow-quantum mb-16 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To empower businesses with cutting-edge technology and
                  intelligent software solutions that drive growth, efficiency,
                  and lasting impact in a rapidly evolving digital world.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 quantum-gradient rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Innovation First</h4>
                    <p className="text-sm text-muted-foreground">
                      Pioneering tomorrow's technology today
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 quantum-gradient rounded-2xl flex items-center justify-center shadow-glow">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">∞</div>
                    <div className="text-lg">Infinite Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto quantum-gradient rounded-2xl flex items-center justify-center shadow-quantum group-hover:shadow-glow transition-all duration-300 scale-on-hover">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div> */}

          {/* Company Values */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 fade-in-up">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for perfection in every line of code and every client interaction.",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace cutting-edge technologies to solve tomorrow's challenges today.",
                },
                {
                  title: "Partnership",
                  description:
                    "We build lasting relationships with our clients, growing together towards success.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:shadow-quantum transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-gradient">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
