import { handleActions } from 'redux-actions';
import { MetadataActionEnums } from './actions';
import { IMetadataStateContext, ISetMetadataPayload, METADATA_CONTEXT_INITIAL_STATE } from './contexts';

const reducer = handleActions<IMetadataStateContext, any>(
  {
    [MetadataActionEnums.SetMetadata]: (
      state: IMetadataStateContext,
      action: ReduxActions.Action<ISetMetadataPayload>
    ) => {
      const { payload } = action;

      return {
        ...state,
        metadata: { ...payload.metadata },
      };
    },
  },

  METADATA_CONTEXT_INITIAL_STATE
);

export default reducer;
