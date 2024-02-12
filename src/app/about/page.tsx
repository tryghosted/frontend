import { Title, Text, Space } from "@mantine/core";

export default function About() {
  return (
    <main className="bg-grid bg-no-repeat">
      <section className="py-7 lg:py-14">
        <h1 className="text-3xl md:text-5xl lg:pr-2 mb-3">About us</h1>

        <Space h="xl" />

        <Title>Navigating the Maze: The Modern Job Search Challenge</Title>

        <Space h="sm" />

        <Text size="xl">
          In today’s fast-evolving job market, finding the right opportunity can
          feel like navigating a complex maze. With technological advancements
          and changing industry dynamics, job seekers face a multitude of
          challenges that go beyond just finding a vacancy. In fact, the biggest
          challenge may not even be the macroeconomic climate (which is a
          codeword for all the{" "}
          <a href="https://layoffs.fyi/" target="_blank">
            ongoing/looming tech layoffs
          </a>
          ).
        </Text>

        <Space h="sm" />

        <Text size="xl">
          The hardest part of the modern job search, in my opinion, is the
          ability to receive actionable feedback on ways to improve from your
          last unsuccessful job interview.
        </Text>

        <Space h="xl" />

        <Title>The Black Box of Recruitment</Title>

        <Space h="sm" />

        <Text size="xl">
          One of the most daunting aspects of job searching is the lack of
          transparency and feedback. Many candidates describe their application
          experience as sending their resumes into a black box, uncertain of
          what happens next. It’s not uncommon to receive no response at all,
          leaving applicants wondering where they fell short. This silence is
          not just frustrating; it’s demoralizing, especially for those who
          repeatedly experience it.
        </Text>

        <Space h="xl" />

        <Title>The Feedback Dilemma</Title>

        <Space h="sm" />

        <Text size="xl">
          The scarcity of constructive feedback is a glaring issue in modern
          recruitment. Overwhelmed by the volume of applicants, recruiters and
          hiring managers often find it impractical to provide personalized
          feedback. This lack of communication leaves candidates without
          valuable insights into their application’s strengths and weaknesses.
          Without this feedback, job seekers are left guessing what went wrong,
          hindering their ability to improve and adapt their approach for future
          opportunities.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          Moreover, the absence of closure or understanding of the selection
          criteria can lead to a cycle of repeated errors and misconceptions.
          Many job seekers crave feedback not just for the sake of their current
          job search but for their overall career development. This unmet need
          points to a broader issue in the recruitment industry, where the human
          aspect of hiring often gets overshadowed by process efficiency.
        </Text>

        <Space h="xl" />

        <Title>How the Math Shakes Out</Title>

        <Space h="sm" />

        <Text size="xl">
          According to{" "}
          <a
            href="https://careersidekick.com/interviews-per-job/"
            target="_blank"
          >
            CareerSidekick:
          </a>
        </Text>

        <Space h="sm" />

        <Text size="lg">
          <ul>
            <li>Average Number of Job Applicants: 250</li>
            <li>Average Number of Applicants Selected for Screening: 6-10</li>
          </ul>
        </Text>

        <Space h="sm" />

        <Text size="xl">
          This means that only 2-3% move from being an applicant to talking with
          a recruiter. From there, job seekers report nearly 75% of them have
          experienced{" "}
          <a
            href="https://www.greenhouse.com/blog/key-learnings-from-the-2022-greenhouse-candidate-experience-report"
            target="_blank"
          >
            being ghosted
          </a>{" "}
          by either a recruiter or a hiring manager. It’s a never-ending battle
          if you’re looking for a job!
        </Text>

        <Space h="sm" />

        <Text size="xl">
          Before it’s all said and done, 249/250 (or 99.6%) of applicants are
          left with little to no feedback on what they can do to improve.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          This is why we built Ghosted AI, we’re a team of individuals with
          experiences ranging from FAANG to leading startups funded by the likes
          of Az16, Accel, and Lightspeed. We know the feeling because we’ve been
          there.
        </Text>

        <Space h="xl" />

        <Title>Ghosted AI</Title>

        <Space h="sm" />

        <Text size="xl">
          Ghosted AI is your interview feedback assistant. We join your remote
          interviews, transcribe call audio, and then leverage the power of
          GPT-4 & LLMs to provide you instant feedback on your performance.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          But that’s only the beginning because we realize you still want real
          feedback from someone you trust. That is why we have a specially
          curated P2P marketplace with trusted professionals that provide live
          coaching using your audio transcription(s) and give you confidence as
          you go into the next round. So whether you ace the interview and are
          on to the next round or are starting over from scratch with a new
          company, Ghosted AI will help you land your dream job!
        </Text>

        <Space h="sm" />

        <Text size="xl">
          Try us for free at <a href="https://tryghosted.ai">tryghosted.ai</a>.
        </Text>
      </section>
    </main>
  );
}
