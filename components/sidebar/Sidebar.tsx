import { Component } from '@/types/components';
import { ComponentList } from './ComponentList';
import { ComponentEditor } from './ComponentEditor';
import { Toast, useToast } from '@/components/Toast';

interface SidebarProps {
  components: Component[];
  selectedComponentId: string | null;
  onSelectComponent: (id: string) => void;
  onDeselectComponent: () => void;
  onUpdateComponent: (component: Component) => void;
  onDeleteComponent: (id: string) => void;
}

export const Sidebar = ({
  components,
  selectedComponentId,
  onSelectComponent,
  onDeselectComponent,
  onUpdateComponent,
  onDeleteComponent,
}: SidebarProps) => {
  const selectedComponent = components.find((c) => c.id === selectedComponentId);
  const { message, showToast } = useToast();

  return (
    <div className="w-96 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      <div className="p-3 border-b border-gray-200 flex justify-end">
        <button
          onClick={() => showToast('Save is not implemented yet')}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium"
        >
          Save
        </button>
        <Toast message={message} />
      </div>
      <div className="flex-1 overflow-hidden">
      {selectedComponent ? (
        <ComponentEditor
          component={selectedComponent}
          onUpdate={onUpdateComponent}
          onBack={onDeselectComponent}
        />
      ) : (
        <ComponentList
          components={components}
          onSelectComponent={onSelectComponent}
          onDeleteComponent={onDeleteComponent}
        />
      )}
      </div>
    </div>
  );
};
