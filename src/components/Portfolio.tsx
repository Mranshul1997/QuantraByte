import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Analytics Dashboard",
      category: "AI/ML",
      description:
        "Advanced analytics platform with machine learning insights and predictive modeling capabilities.",
      image: project1,
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "AWS"],
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom ML models",
        "Interactive visualizations",
      ],
      github: "https://github.com/QuantraByte/ai-dashboard",
      demo: "https://demo.QuantraByte.com/ai-dashboard",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Full-stack e-commerce solution with modern UI/UX and integrated payment processing.",
      image: project2,
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
      features: [
        "Responsive design",
        "Payment integration",
        "Inventory management",
        "Admin dashboard",
      ],
      github: "https://github.com/QuantraByte/ecommerce-platform",
      demo: "https://demo.QuantraByte.com/ecommerce",
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      category: "Mobile Apps",
      description:
        "Cross-platform financial application with biometric authentication and real-time transactions.",
      image: project3,
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      features: [
        "Biometric authentication",
        "Real-time transactions",
        "Investment tracking",
        "Security features",
      ],
      github: "https://github.com/QuantraByte/fintech-app",
      demo: "https://demo.QuantraByte.com/fintech-app",
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      category: "Cloud Integration",
      description:
        "Scalable microservices architecture deployed on AWS with automated CI/CD pipeline.",
      image: project1,
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      features: [
        "Auto-scaling",
        "Load balancing",
        "Monitoring & logging",
        "Zero-downtime deployment",
      ],
      github: "https://github.com/QuantraByte/cloud-infrastructure",
    },
    {
      id: 5,
      title: "Data Pipeline Platform",
      category: "AI/ML",
      description:
        "Automated data processing pipeline with real-time analytics and machine learning integration.",
      image: project2,
      technologies: [
        "Python",
        "Apache Airflow",
        "Apache Kafka",
        "PostgreSQL",
        "Redis",
      ],
      features: [
        "Real-time processing",
        "Data validation",
        "Automated workflows",
        "Monitoring dashboard",
      ],
      github: "https://github.com/QuantraByte/data-pipeline",
    },
    {
      id: 6,
      title: "Healthcare Portal",
      category: "Web Development",
      description:
        "HIPAA-compliant patient management system with telemedicine capabilities.",
      image: project3,
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
      features: [
        "HIPAA compliance",
        "Video consultations",
        "Patient records",
        "Appointment scheduling",
      ],
      demo: "https://demo.QuantraByte.com/healthcare",
    },
  ];

  const categories = [
    "All",
    "AI/ML",
    "Web Development",
    "Mobile Apps",
    "Cloud Integration",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover our latest projects and see how we've helped businesses
              transform their ideas into successful digital solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? "quantum-gradient text-white shadow-quantum"
                    : "bg-card hover:bg-accent text-foreground hover:text-accent-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-quantum scale-on-hover">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 quantum-gradient text-white rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedProject && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {selectedProject.title}
                      </h3>
                      <span className="text-sm font-medium px-3 py-1 quantum-gradient text-white rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-accent rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 quantum-gradient rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 bg-accent text-accent-foreground rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 quantum-gradient text-white rounded-lg hover:quantum-gradient-hover transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
