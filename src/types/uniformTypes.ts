import { RootComponentInstance } from "@uniformdev/canvas"

export type UniformCompositionProps  = {
    data: RootComponentInstance,
    preview: boolean,
    nodes: Array<string>
}

export interface LayoutProps {
    preview: boolean;
    composition: RootComponentInstance;
  }