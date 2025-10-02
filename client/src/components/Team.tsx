import { Card, CardContent } from "@/components/ui/card";
import teamMember1 from "@/assets/AnshulD.png";
import teamMember2 from "@/assets/davidD.png";
import teamMember3 from "@/assets/RahulD.png";
import teamMember4 from "@/assets/ShobhitD.png";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamGroups = [
  {
    // title: "Leadership",
    members: [
      {
        id: 1,
        name: "Jotheraj Kori",
        position: "Senior Tech Lead ",
        bio: " AI/ML leader driving innovative solutions, transforming complex data into insights, and leading teams to deliver cutting-edge projects that accelerate business growth and technological advancement.",
        image: teamMember2,
      },
    ],
  },
  {
    // title: "Senior Tech Lead",
    members: [
      {
        id: 2,
        name: "Anshul Thakur",
        position: "Tech Lead",
        bio: "Visionary leader with years of experience in full-stack development and AI-driven solutions. Passionate about leveraging emerging technologies to build scalable products and drive digital transformation.",
        image: teamMember1,
      },
    ],
  },
  {
    // title: "Quality Assuarance",
    members: [
      {
        id: 3,
        name: "Rahul Gupta",
        position: "Senior QA lead",
        bio: "QA expert ensuring software excellence through strategic testing, process improvements, and team leadership, delivering reliable, high-performing products in dynamic environments.",
        image: teamMember3,
      },
    ],
  },
  {
    // title: "Marketing/Management",
    members: [
      {
        id: 4,
        name: "Shobhit Gotiya",
        position: "Chief Operational Lead",
        bio: "Operational leader optimizing processes, managing teams, and driving efficiency to achieve measurable results and support sustainable business growth.",
        image: teamMember4, // Use a different image if available
      },
    ],
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
          </div>

          {/* Team Groups */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamGroups.map((group, idx) => (
              <div
                key={group.title}
                className="fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {group.title}
                </h3>
                {group.members.map((member) => (
                  <Card key={member.id} className="mb-8">
                    <CardContent className="flex flex-col items-center p-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-35 h-35 mb-4 object-cover shadow-quantum"
                      />
                      <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                      <p className="text-gradient font-medium mb-2">
                        {member.position}
                      </p>
                      <p className="text-muted-foreground text-sm mb-3 text-center">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          {/* <div className="text-center mt-20">
            <div
              className="bg-card rounded-2xl p-8 md:p-12 shadow-quantum fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Team
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our
                passion for innovation. Join us in shaping the future of
                technology.
              </p>
              <a
                href="mailto:careers@QuantraByte.com"
                className="inline-flex items-center px-8 py-4 quantum-gradient hover:quantum-gradient-hover text-white font-semibold rounded-lg shadow-quantum glow-on-hover transition-all duration-300"
              >
                View Open Positions
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
