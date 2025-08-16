import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTracker",
      description: "A comprehensive sustainability tracking app that helps users monitor their carbon footprint and make eco-friendly choices.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "bg-gradient-to-br from-green-400/20 to-blue-500/20",
      github: "https://github.com",
      live: "https://ecotracker.demo"
    },
    {
      title: "DesignSystem Pro",
      description: "A complete design system and component library built for modern React applications with full TypeScript support.",
      tech: ["TypeScript", "Storybook", "Tailwind CSS", "Figma"],
      image: "bg-gradient-to-br from-purple-400/20 to-pink-500/20",
      github: "https://github.com",
      live: "https://designsystem.demo"
    },
    {
      title: "TaskFlow",
      description: "An intelligent project management platform with AI-powered task prioritization and team collaboration features.",
      tech: ["Next.js", "Python", "AWS", "OpenAI API"],
      image: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      github: "https://github.com",
      live: "https://taskflow.demo"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hero-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-gradient-to-br from-card to-card/50 border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2"
            >
              <CardHeader>
                <div className={`w-full h-48 rounded-lg mb-4 ${project.image} flex items-center justify-center`}>
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-border bg-background/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;