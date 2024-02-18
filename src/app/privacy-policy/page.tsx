import { Title, Text, Space, List } from "@mantine/core";

export default function About() {
  return (
    <main className="bg-grid bg-no-repeat">
      <section className="py-7 lg:py-14">
        <h1 className="text-3xl md:text-5xl lg:pr-2 mb-3">Privacy Policy</h1>

        <Space h="xl" />

        <Title>Introduction</Title>

        <Space h="sm" />

        <Text size="xl">
          Ghosted.ai is an AI-powered interview assistant designed to help job
          candidates by transcribing call audio during their remote company
          interviews, thereby closing the feedback loop. We are committed to
          protecting the privacy and security of our users' personal
          information.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          This privacy policy outlines the types of personal information we
          collect, how we use it, the measures we take to ensure your
          information is kept secure, and how users can manage their
          information.
        </Text>

        <Space h="xl" />

        <Title>Information Collection and Use</Title>

        <Space h="sm" />

        <Title order={3}>What Information We Collect</Title>

        <Space h="sm" />
        <Text size="xl">
          <b>Mandatory:</b> We collect your email address to communicate with
          you regarding a potential invite to our MVP release, product updates,
          change logs, and other marketing needs.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          Optional: Any information related to your current job search is
          collected on an optional basis.
        </Text>

        <Space h="sm" />

        <Title order={3}>How We Use Your Information:</Title>

        <Space h="sm" />

        <Text size="xl">
          To notify you about updates to our service, including our MVP release.
        </Text>

        <Space h="sm" />

        <Text size="xl">
          For marketing purposes, to inform you of new features, services, or
          promotional offers.
        </Text>

        <Space h="sm" />

        <Title order={3}>Sharing Of Personal Information:</Title>

        <Space h="sm" />

        <Text size="xl">
          We do not share your personal information with third parties.
        </Text>

        <Space h="sm" />

        <Title order={3}>Managing Your Information:</Title>

        <Space h="sm" />

        <Text size="xl">
          Users who wish to manage or delete their personal information can do
          so by sending an email to{" "}
          <a href="mailto:tryghosted@gmail.com" target="_blank">
            tryghosted@gmail.com
          </a>{" "}
          with the subject line "Requesting data deletion." We will process your
          request in a timely manner.
        </Text>

        <Space h="sm" />

        <Title order={3}>Security:</Title>

        <Space h="sm" />

        <Text size="xl">
          We implement basic security measures to ensure the safe storage of
          your personal data, including your email addresses. While no internet
          transmission is ever completely secure or error-free, we strive to
          protect your personal information to the best of our ability.
        </Text>

        <Space h="sm" />

        <Title order={3}>Contact Us:</Title>

        <Space h="sm" />

        <Text size="xl">
          For any concerns or requests for more information regarding our
          privacy practices, please contact us at{" "}
          <a href="mailto:tryghosted@gmail.com" target="_blank">
            tryghosted@gmail.com
          </a>
          .
        </Text>

        <Space h="sm" />

        <Title order={3}>Changes To Our Privacy Policy:</Title>

        <Space h="sm" />

        <Text size="xl">
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website.
        </Text>
      </section>
    </main>
  );
}
