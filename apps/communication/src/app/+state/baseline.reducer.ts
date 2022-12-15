import { createFeature, createReducer, on } from '@ngrx/store';
import { BaselineApiActions } from './baseline.actions';
import { BaselineDto } from '@workshop/api-interfaces';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

interface State extends EntityState<BaselineDto> {
  loading: boolean;
}

export const adapter = createEntityAdapter<BaselineDto>({
  selectId: (entity) => entity.id, // optional if property is called id
  sortComparer: (a, b) =>
    new Date(a.createdAt).getUTCMilliseconds() -
    new Date(b.createdAt).getUTCMilliseconds(),
});

const initialState: State = adapter.getInitialState({
  loading: false,
});

export const baselinesFeature = createFeature({
  name: 'baselines',
  reducer: createReducer(
    initialState,
    on(
      BaselineApiActions.addBaselineSuccess,
      (state, action): State => adapter.addOne(action.baseline, state)
    ),
    on(BaselineApiActions.loadAllBaselinesSuccess, (state, action) =>
      adapter.setAll(action.baselines, state)
    ),
    on(BaselineApiActions.deleteBaselineSuccess, (state, action) =>
      adapter.removeOne(action.id, state)
    )
  ),
});
