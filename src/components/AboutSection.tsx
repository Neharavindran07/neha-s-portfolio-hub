import { motion } from "framer-motion";
import { Brain, Code, Sparkles, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "2nd Year B.Tech in AI & Machine Learning",
    },
    {
      icon: Brain,
      title: "Focus Area",
      description: "Deep Learning & Neural Networks",
    },
    {
      icon: Code,
      title: "Skills",
      description: "Python, TensorFlow, Data Science",
    },
    {
      icon: Sparkles,
      title: "Interests",
      description: "Computer Vision & NLP",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for technology, I'm on a journey to master 
            the art of building intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-box transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 card-gradient rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
                My Journey in <span className="text-gradient">AI/ML</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a student at R.M.D Engineering College, I'm immersed in the world of 
                artificial intelligence and machine learning. Every day brings new challenges 
                and discoveries as I explore algorithms that can learn, adapt, and solve 
                complex problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the transformative power of AI to create positive change in the world, 
                and I'm committed to being part of that revolution.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  <Brain className="w-32 h-32 text-primary/50" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
