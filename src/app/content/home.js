import googleMeet from "/public/logos/google-meet.svg";
import zoom from "/public/logos/zoom.svg";
import msTeams from "/public/logos/microsoft-teams.svg";
import extensionIllo from "/public/illustrations/extension.svg";
import feedbackIllo from "/public/illustrations/feedback.svg";
import coachingIllo from "/public/illustrations/coaching.svg";

export const builtBy = [
  { title: "Amazon", src: "/logos/amazon.svg", height: "24px" },
  { title: "Visa", src: "logos/visa.svg", height: "24px" },
  { title: "Google", src: "logos/google.svg", height: "24px" },
  { title: "Sprig (a16z & Accel backed)", src: "logos/sprig.svg", height: "24px" },
];
export const worksWith = [
  { title: "Google Meet", src: googleMeet, height: "32px" },
  { title: "Zoom", src: zoom, height: "32px" },
  { title: "Microsoft Teams", src: msTeams, height: "32px" },
];
export const coachingLogos = [
  { title: "Google", src: "/logos/google.svg", height: "50px" },
  { title: "Dropbox", src: "/logos/dropbox.svg", height: "50px" },
  { title: "Instacart", src: "/logos/instacart.svg", height: "50px" },
  { title: "Uber", src: "/logos/uber.svg", height: "34px" },
  { title: "Meta", src: "/logos/meta.svg", height: "40px" },
];
export const how = [
  {
    title: "Download our Chrome Ext",
    subtitle:
      "Ghosted effortlessly integrates with modern video platforms, listening and transcribing each word as you go",
    image: extensionIllo,
    alt: "", // empty alt marks this image as decorative https://www.w3.org/WAI/tutorials/images/decorative/
  },
  {
    title: "Receive Feedback the Next Day",
    subtitle:
      "Ghosted replaces non-existent feedback loops by providing an AI-generated summary and actionable feedback within 24 hours",
    image: feedbackIllo,
    alt: "",
  },
  {
    title: "Schedule a Live Coaching Session",
    subtitle:
      "Plug-in to a specially curated marketplace of professionals to practice your interviewing skills, using live audio transcripts from Ghosted",
    image: coachingIllo,
    alt: "",
  },
];
