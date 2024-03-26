import React from "react";
import { ErrorInfo, ReactNode } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean;

}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) { return { hasError: true }; }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.log(error, errorInfo); }
    render() {
        if (this.state.hasError) { return <PageError/>; }
        return this.props.children;
    }
}

export default ErrorBoundary