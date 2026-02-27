import { Component } from '@/types/components';

interface TextRendererProps {
  component: Component;
}

export const TextRenderer = ({ component }: TextRendererProps) => {
  const { text, styling } = component.props;

  return <p style={styling}>{text}</p>;
};
