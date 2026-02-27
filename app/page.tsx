'use client';

import { useState } from 'react';
import { Component } from '@/types/components';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { PreviewPanel } from '@/components/preview/PreviewPanel';

// State management for the site builder
// This uses React's useState - it's already implemented and working.

const createDefaultComponent = (type: string, id: string): Component => {
  const baseContainer = { alignment: 'center' as const };

  switch (type) {
    case 'text':
      return {
        id,
        type: 'text',
        container: baseContainer,
        props: {
          text: 'New text component',
          styling: {},
        },
      };
    case 'button':
      return {
        id,
        type: 'button',
        container: baseContainer,
        props: {
          text: 'Click me',
          styling: {},
        },
      };
    case 'image':
      return {
        id,
        type: 'image',
        container: baseContainer,
        props: {
          src: 'https://placehold.co/400x300',
          alt: 'Placeholder image',
          styling: { width: '400px' },
        },
      };
    default:
      throw new Error(`Unknown component type: ${type}`);
  }
};

export default function Home() {
  // Component state and selected component tracking
  const [components, setComponents] = useState<Component[]>([
    createDefaultComponent('text', 'text-1'),
    createDefaultComponent('button', 'button-1'),
    createDefaultComponent('image', 'image-1'),
  ]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  const handleUpdateComponent = (updatedComponent: Component) => {
    setComponents(
      components.map((c) => (c.id === updatedComponent.id ? updatedComponent : c))
    );
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter((c) => c.id !== id));
    if (selectedComponentId === id) {
      setSelectedComponentId(null);
    }
  };

  const handleSelectComponent = (id: string) => {
    setSelectedComponentId(id);
  };

  const handleDeselectComponent = () => {
    setSelectedComponentId(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        components={components}
        selectedComponentId={selectedComponentId}
        onSelectComponent={handleSelectComponent}
        onDeselectComponent={handleDeselectComponent}
        onUpdateComponent={handleUpdateComponent}
        onDeleteComponent={handleDeleteComponent}
      />
      <PreviewPanel components={components} />
    </div>
  );
}
