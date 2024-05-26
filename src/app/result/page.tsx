"use client";

import BottomMenu from "@/assets/icons/bottom-menu";
import Button from "@/components/core/button";
import React from "react";

interface CallToActionProps {
  title: string;
  message: string;
  actions: {
    icon: React.ReactNode;
    label: string;
    link: string;
  }[];
  bottomActions: {
    icon: React.ReactNode;
    label: string;
    link: string;
  }[];
}

const Test = () => {
  return (
    <CallToAction
      title="Great job!"
      message="Now that you have been informed on the most recent homelessness data in Australia, and the impact of inaction, what now?"
      actions={[
        {
          icon: (
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
              <path d="M12 12v-5" />
              <path d="M12 12h5" />
            </svg>
          ),
          label: "VOLUNTEER",
          link: "https://https://wearemobilise.org.au/", // Replace with your volunteer link
        },
        {
          icon: (
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21.691a9 9 0 0 1-9-9m0 0c5.523 0 10-4.477 10-10S17.523 1 12 1S2 5.477 2 12c0 5.523 4.477 10 10 10zm0-2c-1.104-2.896-3.04-5.096-5.386-5.385m0 0a8 8 0 1 0 10.772 0M12 12H7" />
            </svg>
          ),
          label: "DONATE",
          link: "https://https://wearemobilise.org.au/", // Replace with your donation link
        },
      ]}
      bottomActions={[
        {
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21.691a9 9 0 0 1-9-9m0 0c5.523 0 10-4.477 10-10S17.523 1 12 1S2 5.477 2 12c0 5.523 4.477 10 10 10zm0-2c-1.104-2.896-3.04-5.096-5.386-5.385m0 0a8 8 0 1 0 10.772 0M12 12H7" />
            </svg>
          ),
          label: "MOBILISE MATCHED",
          link: "https://example.com/matched", // Replace with your matched link
        },
        {
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          ),
          label: "MOBILISE KICKSTARTER",
          link: "https://example.com/kickstarter", // Replace with your Kickstarter link
        },
        {
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            </svg>
          ),
          label: "MOBILISE PAY",
          link: "https://example.com/pay", // Replace with your Pay link
        },
        {
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            </svg>
          ),
          label: "MOBILISE OUTREACH",
          link: "https://example.com/outreach", // Replace with your Outreach link
        },
      ]}
    />
  );
};

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  message,
  actions,
  bottomActions,
}) => {
  return (
    <div className="h-[100vh] flex flex-col overflow-auto hide-scroll grow p-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-100 align-self-left">
        {title}
      </h2>
      <p className="text-lg mb-6 pb-4 pt-4 font-bold">{message}</p>

      <h3 className="text-xl font-bold mb-4 text-blue-100">
        Here's how you can help:
      </h3>
      <div className="flex gap-8 mb-6">
        {actions.map((action) => (
          <div key={action.label} className="flex flex-col items-center w-full">
            {/* {action.icon} */}
           
            <Button
              text={action.label}
              // link={action.link}
              className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-md mt-2"
              onClick={() => (window.location.href = action.link)}
            />
          </div>
        ))}
      </div>

      <p className="text-lg mb-4 font-bold">
        Homelessness affects everyone, make a tangible impact today to help make
        a meaningful difference.
      </p>

      {/* <div className="flex w-[40%]">
        <div className="flex flex-col items-center justify-center">
        <BottomMenu />
        </div>
      </div> */}
    </div>
  );
};

export default Test;
