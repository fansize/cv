"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ResumePage from "@/components/screens/resume-page";

export default function Page() {
  return (
    <div className="h-full p-6">
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-start justify-center p-6">
            <ResumePage />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-start justify-center p-6">
            <ResumePage />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
