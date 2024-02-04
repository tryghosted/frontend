'use client';

import styles from './signup.module.css'
import { Fragment, useState, Component, useRef, useEffect } from 'react'
import { Button, Progress, Select, Text, Space, Paper } from '@mantine/core';
import { debug } from 'console';

interface Question {
  question: string;
  options: string[];
  selected: string | null;
}

const questionBank: Question[] = [
  {
    question: 'How many years of professional experience do you have?',
    options: ['0 to 3 years', '4 to 8 years', '9+ years'],
    selected: null,
  },
  {
    question: 'What best describes your current job search status',
    options: ['Actively looking', 'Not actively looking, but open to opportunities', 'Not looking for a job at the moment'],
    selected: null,
  },
  {
    question: 'Which of the following best describes your current employment status',
    options: ['Self-employed', 'Not employed', 'Employed'],
    selected: null,
  },
]


interface QuestionSelectorProps {
  question: Question;
}
function QuestionSelector({ question }: QuestionSelectorProps) {
  const [selected, setselected] = useState<string | null>('');
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
      data={question.options} />
  )
}

type ProgressBarProps = { currentStep?: number, totalSteps?: number };
function ProgressBar({ currentStep = 1, totalSteps = 4 }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  const style = {
    width: `${progress}%`,
  };
  return (
    <div className='flex flex-row items-center'>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <Progress value={progress} transitionDuration={200} />
      </div>
      <Space w="xs" />
      <Text>{currentStep}/{totalSteps}</Text>
    </div>
  );
}

interface QuestionCardProps {
  question: Question;
  currentQuestionCount: number;
  totalQuestionCount: number;
  onNextClicked: () => void;
}
function QuestionCard({ question, currentQuestionCount, totalQuestionCount, onNextClicked }: QuestionCardProps) {
  var button = currentQuestionCount == totalQuestionCount ? <></> : <Button variant="filled" radius="sm" size="lg" classNames={{ root: 'mb-8' }} onClick={onNextClicked}>Next</Button>;

  return (
    <>
      <h2 className='text-xl font-medium'>{question.question}</h2>
      <div className='pt-4' />
      <QuestionSelector question={question} />
      <div className='pt-8' />
      {button}
    </>
  );
}


export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className='flex flex-col justify-center items-center py-4'>
      <div className={`${styles.card}`}>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold'>Get Early Access to Ghosted.AI Beta</h2>
          <div className='pt-8'></div>
          <div className='px-16 py-8 border rounded-2xl'>
            {questionBank.map((question, index) => (
              index == questionIndex &&
              <QuestionCard
                key={index}
                question={question}
                currentQuestionCount={questionIndex + 1}
                totalQuestionCount={questionBank.length}
                onNextClicked={() => {
                  setQuestionIndex(questionIndex + 1)
                }} />
            ))}
            <ProgressBar currentStep={questionIndex + 1} totalSteps={questionBank.length} />
          </div>
        </div>
      </div>
    </div>
  );
}
