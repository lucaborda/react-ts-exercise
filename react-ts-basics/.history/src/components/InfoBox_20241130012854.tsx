import React, { Children, ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
