"use client";

import { Button, Checkbox, Progress, Select, Space, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import styles from "./signup.module.css";
import { createSurveryResponse } from "@/app/lib/actions";
import { useRouter, useSearchParams } from "next/navigation";

interface Question {
  question: string;
  options: string[];
  selected: string | null;
  marketing_opt_in: boolean;
}

const questionBank: Question[] = [
  {
    question: "How many years of professional experience do you have?",
    options: ["0 to 3 years", "4 to 8 years", "9+ years"],
    selected: null,
    marketing_opt_in: false,
  },
  {
    question: "What best describes your current job search status",
    options: [
      "Actively looking",
      "Not actively looking, but open to opportunities",
      "Not looking for a job at the moment",
    ],
    selected: null,
    marketing_opt_in: false,
  },
  {
    question:
      "Which of the following best describes your current employment status",
    options: ["Self-employed", "Not employed/Laid off", "Employed"],
    selected: null,
    marketing_opt_in: true,
  },
];

interface QuestionSelectorProps {
  question: Question;
}
function QuestionSelector({ question }: QuestionSelectorProps) {
  const [selected, setselected] = useState<string | null>(question.selected);
  return (
    <Select
      placeholder="Select an option"
      styles={{
        input: { height: 55, borderRadius: 10 },
        dropdown: { borderRadius: 10 },
        option: { height: 55 },
      }}
      value={selected}
      onChange={(value) => {
        question.selected = value;
        setselected(value);
      }}
      data={question.options}
    />
  );
}

type ProgressBarProps = { currentStep?: number; totalSteps?: number };
function ProgressBar({ currentStep = 1, totalSteps = 4 }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  const style = {
    width: `${progress}%`,
  };
  return (
    <div className="flex flex-row items-center">
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <Progress value={progress} transitionDuration={200} />
      </div>
      <Space w="xs" />
      <Text>
        {currentStep}/{totalSteps}
      </Text>
    </div>
  );
}

interface QuestionCardProps {
  question: Question;
  currentQuestionCount: number;
  totalQuestionCount: number;
  onNextClicked: () => void;
  onBackClicked: () => void;
  onSubmitClicked: () => void;
}
function QuestionCard({
  question,
  currentQuestionCount,
  totalQuestionCount,
  onNextClicked,
  onBackClicked,
  onSubmitClicked,
}: QuestionCardProps) {
  const [checked, setChecked] = useState(question.marketing_opt_in);

  var nextButton = <></>;
  var prevButton = <></>;
  var submitButton = <></>;
  var emailCheckbox = <></>;
  const buttonWidth = 150;
  const buttonHeight = 40;

  if (currentQuestionCount > 1) {
    prevButton = (
      <Button
        variant="default"
        radius="md"
        w={buttonWidth}
        h={buttonHeight}
        size="sm"
        classNames={{ root: "mb-8 mr-4" }}
        onClick={onBackClicked}
      >
        Back
      </Button>
    );
  }

  if (currentQuestionCount < totalQuestionCount) {
    nextButton = (
      <Button
        variant="filled"
        radius="md"
        w={buttonWidth}
        h={buttonHeight}
        size="sm"
        classNames={{ root: "mb-8 " }}
        onClick={onNextClicked}
        rightSection={<IconArrowRight size={14}></IconArrowRight>}
      >
        Next
      </Button>
    );
  }

  if (currentQuestionCount > 2) {
    submitButton = (
      <Button
        variant="filled"
        radius="md"
        w={buttonWidth}
        h={buttonHeight}
        size="sm"
        classNames={{ root: "mb-8 " }}
        onClick={onSubmitClicked}
      >
        Submit
      </Button>
    );
    emailCheckbox = (
      <Checkbox
        checked={checked}
        onChange={(event) => {
          question.marketing_opt_in = event.currentTarget.checked;
          setChecked(event.currentTarget.checked);
        }}
        classNames={{ root: "mt-4 " }}
        label="Sign up for marketing communications and newsletters"
      />
    );
  }

  return (
    <>
      <h2 className="text-xl font-medium">{question.question}</h2>
      <div className="pt-4" />
      <QuestionSelector question={question} />
      {emailCheckbox}
      <div className="pt-8" />
      <div>
        {prevButton}
        {nextButton}
        {submitButton}
      </div>
    </>
  );
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className={`${styles.card}`}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
            Get Early Access to Ghosted.AI Beta
          </h2>
          <div className="pt-8"></div>
          <div className="px-16 py-8 border rounded-2xl">
            {questionBank.map(
              (question, index) =>
                index == questionIndex && (
                  <QuestionCard
                    key={index}
                    question={question}
                    currentQuestionCount={questionIndex + 1}
                    totalQuestionCount={questionBank.length}
                    onNextClicked={() => {
                      setQuestionIndex(questionIndex + 1);
                    }}
                    onBackClicked={() => {
                      setQuestionIndex(questionIndex - 1);
                    }}
                    onSubmitClicked={async () => {
                      await createSurveryResponse(
                        email,
                        questionBank[0].selected,
                        questionBank[1].selected,
                        questionBank[2].selected,
                        questionBank[2].marketing_opt_in
                      );
                      router.push("/");
                    }}
                  />
                )
            )}
            <ProgressBar
              currentStep={questionIndex + 1}
              totalSteps={questionBank.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
