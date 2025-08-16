import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "GraphQL", "Next.js", "Tailwind CSS", "Figma"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 hero-gradient">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that bridge the gap between design and functionality. 
                My journey started with a curiosity for how things work, which led me to 
                explore both the technical and creative sides of software development.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or experimenting with emerging 
                technologies. I believe great software is born from the intersection 
                of solid engineering and thoughtful user experience.
              </p>
              
              <p>
                Currently, I'm focused on building scalable web applications and 
                mentoring aspiring developers in my local community.
              </p>
            </div>
          </div>
          
          {/* Stats & Skills */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl shadow-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl shadow-card border border-border">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies I Love</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-card/50 border-border hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;