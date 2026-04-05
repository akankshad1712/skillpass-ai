import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [resume, setResume] = useState("");
  const navigate = useNavigate();

  // ✅ Analyze Skills
  const analyzeSkills = (repos: any[]) => {
    let skillsData: any = {
      Java: 0,
      Python: 0,
      AI: 0,
      Web: 0,
    };

    repos.forEach((repo) => {
      const name = repo.name.toLowerCase();

      if (name.includes("java")) skillsData.Java++;
      if (name.includes("python")) skillsData.Python++;
      if (name.includes("ai")) skillsData.AI++;
      if (name.includes("react") || name.includes("web"))
        skillsData.Web++;
    });

    return skillsData;
  };

  // ✅ Resume Generator (ONLY ONE VERSION)
  const generateResume = (skills: any, repos: any[]) => {
    let summary = "Passionate Software Engineer with experience in ";

    if (skills.Web > 2) summary += "Web Development, ";
    if (skills.Java > 2) summary += "Java, ";
    if (skills.Python > 2) summary += "Python, ";
    if (skills.AI > 1) summary += "Artificial Intelligence, ";

    summary += "and building real-world projects.";

    const topProjects = repos.slice(0, 5).map((r) => r.name);

    return `
Name: ${username}

Skills:
- Java (${skills.Java > 2 ? "Strong" : "Basic"})
- Python (${skills.Python > 2 ? "Strong" : "Basic"})
- AI (${skills.AI > 1 ? "Intermediate" : "Basic"})
- Web (${skills.Web > 2 ? "Strong" : "Basic"})

Projects:
${topProjects.map((p) => `- ${p}`).join("\n")}

Summary:
${summary}
    `;
  };

  // ✅ Fetch GitHub + Generate Resume
  const handleAnalyze = async () => {
    if (!username) return alert("Enter username ❌");

    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await res.json();

      if (!Array.isArray(data)) {
        alert("Invalid GitHub username ❌");
        return;
      }

      const skillsData = analyzeSkills(data);
      const resumeData = generateResume(skillsData, data);

      setResume(resumeData);

      // Navigate to profile page
      navigate(`/user/${username}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>SkillPass AI 🚀</h1>

      <h2>Analyze Your Developer Skill</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleAnalyze}>Analyze</button>

      {/* ✅ Resume Output */}
      {resume && (
        <>
          <h3>AI Generated Resume:</h3>
          <pre
            style={{
              background: "#111",
              color: "#0f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {resume}
          </pre>
        </>
      )}
    </div>
  );
}

export default Home;