import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";

function Profile() {
  const { username } = useParams();
  const [repos, setRepos] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState<any>({});
  const [feedback, setFeedback] = useState<string[]>([]);
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = resume.split("\n");

    let y = 10;

    lines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 8;

      if (y > 280) {
        doc.addPage();
        y = 10;
      }
    });

    doc.save(`${username}_resume.pdf`);
  };

  // ✅ Score
  const calculateScore = (repos: any[]) => {
    let total = 0;
    repos.forEach((repo) => {
      total += repo.stargazers_count * 2;
      total += repo.forks_count * 3;
    });
    return Math.min(total, 100);
  };

  // ✅ Skills
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

  // ✅ Feedback
  const generateFeedback = (skills: any) => {
    let feedbackList: string[] = [];

    if (skills.Java > 2) feedbackList.push("💪 Strong in Java");
    else feedbackList.push("📚 Improve Java skills");

    if (skills.Python > 2) feedbackList.push("🐍 Good Python");
    else feedbackList.push("📚 Learn Python");

    if (skills.AI > 1) feedbackList.push("🤖 AI promising");
    else feedbackList.push("⚠️ Need AI projects");

    if (skills.Web > 2) feedbackList.push("🌐 Strong Web Dev");
    else feedbackList.push("📚 Improve Web Dev");

    return feedbackList;
  };

  // ✅ Resume Generator
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

  // ✅ Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          alert("Invalid GitHub username ❌");
          return;
        }

        const skillsData = analyzeSkills(data);

        setRepos(data);
        setScore(calculateScore(data));
        setSkills(skillsData);
        setFeedback(generateFeedback(skillsData));
        setResume(generateResume(skillsData, data));
      } catch (error) {
        console.error(error);
        alert("Error fetching data ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <h2>Loading... ⏳</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{username}'s Profile 🚀</h1>

      <h2>Skill Score: {score} / 100</h2>

      <h3>Skills:</h3>
      <ul>
        {Object.entries(skills).map(([skill, value]: any) => (
          <li key={skill}>
            {skill}: {value}
          </li>
        ))}
      </ul>

      <h3>AI Feedback:</h3>
      <ul>
        {feedback.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      {/* ✅ Resume */}
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

      {/* ✅ Download Button (FIXED POSITION) */}
      <button onClick={downloadPDF} style={{ marginTop: "10px" }}>
        📄 Download Resume as PDF
      </button>
    </div>
  );
}

export default Profile;