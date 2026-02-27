import { Component } from '@/types/components';

interface ImageRendererProps {
  component: Component;
}

export const ImageRenderer = ({ component }: ImageRendererProps) => {
  const { src, alt, styling } = component.props;

  return (
    <div style={{ ...styling, overflow: 'hidden', position: 'relative' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
