import React, { useState } from "react";
import { TabBody, TabLabel } from "@nextjs-recharts/app/components/tabs";

type TTab = {
  id: number;
  name: string;
  content: JSX.Element;
};

type TTabsProps = {
  tabs: TTab[];
};

export const Tabs = ({ tabs }: TTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-2 px-4 bg-green-50 shadow rounded">
        {
          tabs?.map((tab: TTab, index: number) => (
            <TabBody
              key={tab?.id}
              isActive={index === activeTab}>
              {tab?.content}
            </TabBody>
          ))
        }
      </div>
      <div className="py-1 px-0 tabs tabs-bordered">
        {tabs?.map((tab: TTab, index: number) => (
          <TabLabel
            key={tab?.id}
            name={tab?.name}
            isActive={index === activeTab}
            clickHandler={() => setActiveTab(index)}
          />
        ))}
      </div>
    </>
  );
};
