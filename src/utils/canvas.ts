import { CanvasClient, CANVAS_PUBLISHED_STATE, CANVAS_DRAFT_STATE, RootComponentInstance } from '@uniformdev/canvas';
// import type { RootComponentInstance } from '@uniformdev/canvas';
// import { ProjectMapClient } from '@uniformdev/project-map';


export const globalCompositionId = 'afedeceb-3d55-46a8-b609-9a99a104d4ad';

export const getCanvasClient = () => {
    const apiKey = process.env.UNIFORM_API_KEY;
    const apiHost = process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app';
    const edgeApiHost = process.env.UNIFORM_CLI_BASE_EDGE_URL || 'https://uniform.global';
    const projectId = process.env.UNIFORM_PROJECT_ID;
  
    if (!apiKey) {
      throw new Error('apiKey is not specified. CanvasClient cannot be instantiated: ' + apiKey);
    }
  
    if (!apiHost) throw new Error('apiHost is not specified. CanvasClient cannot be instantiated');
    if (!edgeApiHost) throw new Error('edgeApiHost is not specified. CanvasClient cannot be instantiated');
  
    if (!projectId) throw new Error('projectId is not specified. CanvasClient cannot be instantiated.');
  
    const client = new CanvasClient({
      apiKey,
      apiHost,
      projectId,
      edgeApiHost,
    });
  
    return client;
  };
  export const getState = (preview: boolean | undefined) =>
  process.env.NODE_ENV === 'development' || preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE;
// export const getProjectMapClient = () => {
//   const apiKey = process.env.UNIFORM_API_KEY;
//   const apiHost = process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app';
//   const projectId = process.env.UNIFORM_PROJECT_ID;

//   if (!apiHost) throw new Error('apiHost is not specified. Project Map client cannot be instantiated');

//   if (!projectId) throw new Error('projectId is not specified. Project Map client cannot be instantiated');

//   return new ProjectMapClient({
//     apiKey,
//     apiHost,
//     projectId,
//   });
// };

export const getCompositionById = async (id: string, context: { preview: boolean }) => {
  if (!id) throw new Error('composition id is not provided');

  const { preview = false } = context || {};
  try {
    const { composition } = await getCanvasClient().getCompositionById({
      compositionId: id,
      state: getState(preview),
    });

    return composition;
  } catch (err) {
    console.error({ err });
    return undefined;
  }
};
export const mergeGlobalCompositions = (
    composition: RootComponentInstance,
    globalComposition: RootComponentInstance | undefined
  ): RootComponentInstance => {
    return {
      _name: composition?._name,
      _id: composition?._id,
      type: composition?.type,
      parameters: {
        ...composition?.parameters,
        ...globalComposition?.parameters,
      },
      slots: {
        ...(Boolean(globalComposition?.slots?.header) && { header: globalComposition?.slots?.header }),
        ...(Boolean(composition?.slots?.pageContent) && { pageContent: composition?.slots?.pageContent }),
        ...(Boolean(globalComposition?.slots?.footer) && { footer: globalComposition?.slots?.footer }),
      },
    };
  };
// export const getState = (preview: boolean | undefined) =>
//   process.env.NODE_ENV === 'development' || preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE;

// export const getBreadcrumbs = async (compositionId: string, preview?: boolean) => {
//   const projectMapClient = getProjectMapClient();

//   const { nodes: projectMapNodes } = await projectMapClient.getNodes({
//     compositionId: compositionId,
//     includeAncestors: true,
//     state: getState(preview),
//   });

//   return projectMapNodes?.map(node => ({
//     name: node.name,
//     path: node.path,
//     type: node.type,
//     isRoot: node.path === '/',
//   }));
// };

// export const mergeGlobalCompositions = (
//   composition: RootComponentInstance,
//   globalComposition: RootComponentInstance | undefined
// ): RootComponentInstance => {
//   return {
//     _name: composition?._name,
//     _id: composition?._id,
//     type: composition?.type,
//     parameters: {
//       ...composition?.parameters,
//       ...globalComposition?.parameters,
//     },
//     slots: {
//       ...(Boolean(globalComposition?.slots?.header) && { header: globalComposition?.slots?.header }),
//       ...(Boolean(composition?.slots?.pageContent) && { pageContent: composition?.slots?.pageContent }),
//       ...(Boolean(globalComposition?.slots?.footer) && { footer: globalComposition?.slots?.footer }),
//     },
//   };
// };