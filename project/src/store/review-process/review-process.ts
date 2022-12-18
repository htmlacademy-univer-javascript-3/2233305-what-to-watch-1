import {ReviewProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {fetchAddReviewAction, fetchReviewAction} from '../api-actions';
import {NameSpace} from '../../const';

const initialState: ReviewProcess = {
  review: [],
  isDataLoaded: false,
  error : undefined
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.review = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchAddReviewAction.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});
