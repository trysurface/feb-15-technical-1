import { Component } from '@/types/components';

interface ImageEditorProps {
  component: Component;
  onUpdate: (component: Component) => void;
}

export const ImageEditor = ({ component }: ImageEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">
          🖼️ Editor Not Implemented
        </h3>
        <p className="text-sm text-yellow-800 mb-4">
          This editor needs to be implemented to allow editing image component properties.
        </p>
        <div className="bg-white rounded p-4 text-xs">
          <p className="font-semibold mb-2">Current component data:</p>
          <pre className="overflow-auto">{JSON.stringify(component, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
