export type Alignment = 'left' | 'center' | 'right';

export interface Component {
  id: string;
  type: string;
  container: { alignment: Alignment };
  props: any;
}
