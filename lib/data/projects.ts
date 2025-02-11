// Function to fetch projects
export const getProjects = () => {
  // In a real-world scenario, this would likely fetch from an API or database
  return [
    {
      id: 1,
      name: "AI Research Initiative",
      description: "Exploring the applications of AI in various industries",
      status: "In Development",
      progress: 65,
      category: "Research",
      team: ["Alice", "Bob"],
      priority: "Medium",
      stage: "Development"
    },
    {
      id: 2, 
      name: "Blockchain Innovation",
      description: "Developing blockchain-based solutions for secure transactions",
      status: "In Development", 
      progress: 45,
      category: "Technology",
      team: ["Charlie", "David"],
      priority: "High",
      stage: "Prototyping"
    }
  ];
};
