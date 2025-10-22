import React, { ErrorInfo, ReactNode } from "react";
import { navigateToFallback } from "@/utils";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
    navigateToFallback();
  }

  render() {
    if (this.state.hasError) {
      return <>navigateToFallback()</>;
    }

    return this.props.children;
  }
}
